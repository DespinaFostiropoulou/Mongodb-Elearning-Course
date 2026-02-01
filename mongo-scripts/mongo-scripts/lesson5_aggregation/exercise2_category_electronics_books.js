// Products where category is Electronics OR Books

use products_db;

db.Products.find({
    category: { $in: ["Electronics", "Books"] }
}).pretty();
