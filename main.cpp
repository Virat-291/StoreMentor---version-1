#include "crow.h"
#include <mysql/jdbc.h>
#include <iostream>
#include <cstdlib>
#include <memory>
#include <fstream>
#include <sstream>

using namespace std;
using namespace crow;

const string DB_URL = "tcp://127.0.0.1:3306";
const string DB_USER = "storementor_app";
const string DB_NAME = "storementor";

sql::mysql::MySQL_Driver* driver =
    sql::mysql::get_mysql_driver_instance();

unique_ptr<sql::Connection> connectDB() {
    const char* password = getenv("STOREMENTOR_DB_PASSWORD");

    if (!password || !*password) {
        throw runtime_error(
            "STOREMENTOR_DB_PASSWORD environment variable is missing"
        );
    }

    auto connection = unique_ptr<sql::Connection>(
        driver->connect(DB_URL, DB_USER, password)
    );

    connection->setSchema(DB_NAME);
    return connection;
}

int main() {
    // Test the database connection
    try {
        auto db = connectDB();
        cout << "MySQL connected successfully!" << endl;
    }
    catch (const sql::SQLException& e) {
        cerr << "MySQL connection error: "
             << e.what() << endl;
        return 1;
    }
    catch (const exception& e) {
        cerr << "Error: " << e.what() << endl;
        return 1;
    }

    SimpleApp app;

    // Home route
   
    CROW_ROUTE(app, "/")([]() {
        std::ifstream file("static/index.html");

        if (!file.is_open()) {
            return crow::response(404, "index.html not found");
        }

        std::stringstream buffer;
        buffer << file.rdbuf();

        crow::response res(buffer.str());
        res.set_header("Content-Type", "text/html");
        return res;
    });
    CROW_ROUTE(app, "/style.css")([]() {
        std::ifstream file("static/style.css");

        if (!file.is_open()) {
            return crow::response(404, "style.css not found");
        }

        std::stringstream buffer;
        buffer << file.rdbuf();

        crow::response res(buffer.str());
        res.set_header("Content-Type", "text/css");
        return res;
    });
    CROW_ROUTE(app, "/script.js")([]() {
        std::ifstream file("static/script.js");

        if (!file.is_open()) {
            return crow::response(404, "script.js not found");
        }

        std::stringstream buffer;
        buffer << file.rdbuf();

        crow::response res(buffer.str());
        res.set_header("Content-Type", "application/javascript");
        return res;
    });
    // API to retrieve merchants
    CROW_ROUTE(app, "/api/merchants")([]() {
        try {
            auto db = connectDB();

            unique_ptr<sql::Statement> stmt(
                db->createStatement()
            );

            unique_ptr<sql::ResultSet> result(
                stmt->executeQuery(
                    "SELECT id, name, business, monthly_sales "
                    "FROM merchants"
                )
            );

            crow::json::wvalue::list merchants;

            while (result->next()) {
                crow::json::wvalue merchant;

                merchant["id"] = result->getInt("id");
                merchant["name"] = result->getString("name");
                merchant["business"] =
                    result->getString("business");
                merchant["monthly_sales"]=static_cast<double>(result->getDouble("monthly_sales"));

                merchants.push_back(std::move(merchant));
            }

            crow::json::wvalue response;
            response["merchants"] = std::move(merchants);

            return crow::response(200, response.dump());
        }
        catch (const sql::SQLException& e) {
            cerr << "MySQL query error: "
                 << e.what() << endl;
            return crow::response(
                500, "Database query failed"
            );
        }
        catch (const exception& e) {
            cerr << "Error: " << e.what() << endl;
            return crow::response(
                500, "Internal server error"
            );
        }
    });

    cout << "Server running on port 18080..." << endl;
    app.port(18080).multithreaded().run();
}