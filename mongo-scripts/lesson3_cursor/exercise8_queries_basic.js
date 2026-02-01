// Exercise 8: Basic Queries

use employees_db;

// Salary > 60000, show only name + position
db.employee_info.find(
    { salary: { $gt: 60000 } },
    { fname: 1, lname: 1, position: 1, _id: 0 }
).pretty();
