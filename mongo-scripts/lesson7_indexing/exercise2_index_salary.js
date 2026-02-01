// Exercise 2: Create index on salary

use employees_db;

db.Employees.createIndex({ salary: 1 });

print("Index created on salary field.");
