// Products where name contains "Pro"

use products_db;

db.Products.find({
    name: { $regex: /Pro/i }
}).pretty();
