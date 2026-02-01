// Exercise 4: Create multikey index on skills array

use employees_db;

db.Employees.createIndex({ skills: 1 });

print("Multikey index created on skills.");
