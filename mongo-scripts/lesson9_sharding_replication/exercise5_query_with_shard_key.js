// Exercise 5: Query using shard key (customer_id)

use company_db;

db.customers.find({ customer_id: 5 }).pretty();
