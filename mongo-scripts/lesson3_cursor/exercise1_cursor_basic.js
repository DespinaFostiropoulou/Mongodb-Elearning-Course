// Exercise 1: Basic Cursor Usage

use employees_db;

// Retrieve all employees
const cursor = db.employees.find();

// Pretty print results
cursor.pretty();
