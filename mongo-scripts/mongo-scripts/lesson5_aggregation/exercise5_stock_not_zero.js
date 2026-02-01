// Products where stock is NOT equal to 0

use products_db;

db.Products.find({
    stock: { $ne: 0 }
}).pretty();
