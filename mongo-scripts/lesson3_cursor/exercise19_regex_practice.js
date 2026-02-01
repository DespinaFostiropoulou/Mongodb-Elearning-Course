// Exercise 19: Regular Expressions

use employees_db;

// Insert sample employees
db.employees.insertMany([
    { fname: "Αναστασία", lname: "Παπαδοπούλου" },
    { fname: "Αλέξανδρος", lname: "Σαμαράς" },
    { fname: "Βασιλική", lname: "Μήτσου" }
]);

// Find names starting with "A" (Greek "Α")
db.employees.find({
    fname: { $regex: /^Α/ }
}).pretty();
