// Employees with exactly 2 skills

use employees_db;

db.Employees.find({
    skills: { $size: 2 }
}).pretty();
