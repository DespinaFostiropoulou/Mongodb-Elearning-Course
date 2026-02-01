// Exercise 1: Create Products collection with initial data

use products_db;

db.Products.insertMany([
    {
        _id: 1,
        name: "Smartphone Pro",
        category: "Electronics",
        price: 899,
        isAvailable: true,
        stock: 25,
        reviews: 15,
        tags: ["tech", "premium"],
        features: ["wireless", "touchscreen"]
    },
    {
        _id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 120,
        isAvailable: false,
        stock: 0,
        reviews: 5,
        tags: ["audio", "tech"],
        features: ["bluetooth", "lightweight", "sale"]
    },
    {
        _id: 3,
        name: "Office Desk",
        category: "Furniture",
        price: 350,
        isAvailable: true,
        stock: 10,
        reviews: 2,
        tags: ["office", "wooden"],
        features: ["durable", "modern"]
    },
    {
        _id: 4,
        name: "Modern Chair",
        category: "Furniture",
        price: 180,
        isAvailable: true,
        stock: 3,
        reviews: 0,
        tags: ["comfort", "ergonomic"],
        features: ["adjustable", "sale"]
    },
    {
        _id: 5,
        name: "Programming Basics",
        category: "Books",
        price: 45,
        isAvailable: true,
        stock: 50,
        reviews: 25,
        tags: ["coding", "beginner"],
        features: ["educational"]
    },
    {
        _id: 6,
        name: "Advanced Algorithms",
        category: "Books",
        price: 75,
        isAvailable: true,
        stock: 20,
        reviews: 12,
        tags: ["programming", "advanced"],
        features: ["reference"]
    },
    {
        _id: 7,
        name: "Tablet Pro",
        category: "Electronics",
        price: 450,
        isAvailable: true,
        stock: 15,
        reviews: 8,
        tags: ["portable", "tech"],
        features: ["lightweight", "touchscreen"]
    },
    {
        _id: 8,
        name: "Fiction Novel",
        category: "Books",
        price: 25,
        isAvailable: false,
        stock: 0,
        reviews: 7,
        tags: ["fiction", "story"],
        features: ["sale"]
    }
]);

print("Products inserted successfully!");
