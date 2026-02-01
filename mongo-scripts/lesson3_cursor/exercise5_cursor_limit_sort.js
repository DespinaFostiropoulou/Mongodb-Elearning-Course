// Exercise 5: limit() and sort()

use employees_db;

// Sort by salary ascending and limit to 2
db.employees.find().sort({ salary: 1 }).limit(2).pretty();
