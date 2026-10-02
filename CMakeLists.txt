
cmake_minimum_required(VERSION 3.16)

project(StoreMentor LANGUAGES C CXX)

set(CMAKE_C_STANDARD 99)
set(CMAKE_C_STANDARD_REQUIRED ON)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(CROW_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
set(CROW_BUILD_TESTS OFF CACHE BOOL "" FORCE)

set(ASIO_INCLUDE_DIR
    "${CMAKE_CURRENT_SOURCE_DIR}/external/asio/include"
    CACHE PATH "" FORCE
)

add_subdirectory(external/crow)
add_compile_definitions(_WIN32_WINNT=0x0A00)
# Find MySQL Connector/C++
find_package(mysql-concpp CONFIG REQUIRED
    PATHS "C:/Libraries/mysql-connector-c++-26.7.0-winx64"
    NO_DEFAULT_PATH
)

# Build StoreMentor
add_executable(storementor main.cpp)

target_link_libraries(storementor PRIVATE
    Crow::Crow
    mysql::concpp-jdbc
    ws2_32
    mswsock
)