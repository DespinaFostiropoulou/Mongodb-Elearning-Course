// Exercise 17: Create Document

use employees_db;

db.employees.insertOne({
    fname: "Αλεξάνδρα",
    lname: "Κωνσταντίνου",
    age: 30,
    specialties: ["Leadership", "Project Management"],
    address: {
        city: "Θεσσαλονίκη",
        street: "Εγνατίας 22",
        zip: "54624"
    },
    isActive: true
});

// Retrieve only the name field
db.employees.find(
    { fname: "Αλεξάνδρα" },
    { fname: 1, lname: 1, _id: 0 }
).pretty();
