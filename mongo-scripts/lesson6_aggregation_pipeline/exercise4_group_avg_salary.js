// Exercise 4: Group by department and compute average salary

use employees_db;

db.Employees.aggregate([
    {
        $group: {
            _id: "$departments",
            avgSalary: { $avg: "$salary" }
        }
    }
]);
