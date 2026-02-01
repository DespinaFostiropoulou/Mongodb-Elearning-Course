// Exercise 5: Find projects with budget > 60000

use company_db;

db.Projects.find({
    budget: { $gt: 60000 }
}).pretty();
