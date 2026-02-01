// Compute totalCost = price * stock

use products_db;

db.Products.aggregate([
    {
        $project: {
            name: 1,
            price: 1,
            stock: 1,
            totalCost: { $multiply: ["$price", "$stock"] }
        }
    }
]);
