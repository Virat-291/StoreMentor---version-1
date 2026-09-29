#include "crow.h"

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/")([]() {
        return "Hello from StoreMentor!";
    });

    app.port(18080).multithreaded().run();
}