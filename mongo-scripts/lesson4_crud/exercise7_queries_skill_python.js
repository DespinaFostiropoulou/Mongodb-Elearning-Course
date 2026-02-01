// Employees with Python skill

use employees_db;

db.Employees.find({ skills: "Python" }).pretty();
