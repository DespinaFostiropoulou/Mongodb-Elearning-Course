// Add "popular" to tags only if not already present

use products_db;

db.Products.updateMany(
    {},
    { $addToSet: { tags: "popular" } }
);
