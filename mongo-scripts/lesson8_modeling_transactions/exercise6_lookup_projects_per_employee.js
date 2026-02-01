// Exercise 6: Join project info into each employee using $lookup

use company_db;

db.Employees.aggregate([
    {
        $lookup: {
            from: "Projects",
            localField: "projects.project_id",
            foreignField: "_id",
            as: "project_details"
        }
    }
]).pretty();
