// Exercise 7: Query to check hashed distribution

use company_db;

// This query forces mongos to route based on hashed key
db.customers.find({ customer_id: { $gte: 1, $lte: 10 } }).pretty();

// Check chunk distribution
sh.status();
