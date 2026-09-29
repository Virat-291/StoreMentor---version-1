cmake_minimum_required(VERSION 3.16)

project(StoreMentor LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(CROW_BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
set(CROW_BUILD_TESTS OFF CACHE BOOL "" FORCE)
set(ASIO_INCLUDE_DIR "${CMAKE_CURRENT_SOURCE_DIR}/external/asio/include" CACHE PATH "" FORCE)
add_subdirectory(external/crow)

add_executable(storementor main.cpp)

target_link_libraries(storementor PRIVATE
    Crow::Crow
    ws2_32
    mswsock
)