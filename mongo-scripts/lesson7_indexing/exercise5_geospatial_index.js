// Exercise 5: Create 2dsphere geospatial index on location

use employees_db;

db.Employees.createIndex({ location: "2dsphere" });

print("2dsphere geospatial index created on location.");
