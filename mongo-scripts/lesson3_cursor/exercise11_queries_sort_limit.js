// Exercise 11: Sorting and Limiting

use employees_db;

// Sort salary descending
db.employee_info.find().sort({ salary: -1 }).pretty();

// Top 2 employees
db.employee_info.find().sort({ salary: -1 }).limit(2).pretty();

// Skip 1, get next 2
db.employee_info.find().sort({ salary: -1 }).skip(1).limit(2).pretty();
