// First employee with salary > 50000

use employees_db;

db.Employees.findOne({ salary: { $gt: 50000 } });
