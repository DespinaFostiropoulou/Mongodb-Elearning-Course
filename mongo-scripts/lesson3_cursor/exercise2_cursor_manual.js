// Exercise 2: Manual Cursor Handling

use employees_db;

// Cursor for employees aged 30
const cursor = db.employees.find({ age: 30 });

// Show first document
print("First document:");
printjson(cursor.next());

// Check if more documents exist
print("Has more documents?");
print(cursor.hasNext());
