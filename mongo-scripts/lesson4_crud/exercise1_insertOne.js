// Exercise 1: insertOne()

use products_db;

db.Products.insertOne({
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    stock: 30
});

// Show inserted document
db.Products.find().pretty();
