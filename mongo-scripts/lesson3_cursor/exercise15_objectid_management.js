// Exercise 15: ObjectId Management

use employees_db;

// Create new ObjectId
const newId = ObjectId();

// Show string form
print(newId.toString());

// Insert document
db.employees.insertOne({
    _id: newId,
    fname: "ObjectId",
    lname: "Test",
    salary: 50000
});
