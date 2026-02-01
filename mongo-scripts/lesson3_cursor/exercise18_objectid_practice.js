// Exercise 18: ObjectId Practice

use employees_db;

// Insert document without _id
db.employees.insertOne({
    fname: "Test",
    lname: "ObjectId",
    position: "analyst",
    salary: 48000
});

// Retrieve ObjectId
const doc = db.employees.findOne({ lname: "ObjectId" });
print("ObjectId:");
printjson(doc._id);

// Show timestamp
print("Timestamp:");
print(doc._id.getTimestamp());

// Create manual ObjectId
const manualId = new ObjectId();

db.employees.insertOne({
    _id: manualId,
    fname: "Manual",
    lname: "ObjectId",
    salary: 51000
});
