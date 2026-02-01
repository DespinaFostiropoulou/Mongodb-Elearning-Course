// Exercise 1: Create customers collection and insert data

use company_db;

db.createCollection("customers");

db.customers.insertMany([
    { customer_id: 1, name: "Giannis Papadopoulos", age: 28, registration_date: ISODate("2023-01-01T10:00:00Z") },
    { customer_id: 2, name: "Maria Vasilaki", age: 34, registration_date: ISODate("2023-02-15T14:00:00Z") },
    { customer_id: 3, name: "Elena Georgiou", age: 40, registration_date: ISODate("2023-05-23T09:00:00Z") },
    { customer_id: 4, name: "Andreas Nikolaidis", age: 22, registration_date: ISODate("2023-06-30T12:00:00Z") },
    { customer_id: 5, name: "Katerina Papadaki", age: 45, registration_date: ISODate("2023-07-15T08:30:00Z") },
    { customer_id: 6, name: "Dimitra Vlahou", age: 30, registration_date: ISODate("2023-09-01T10:00:00Z") },
    { customer_id: 7, name: "Nikolaos Koutsou", age: 36, registration_date: ISODate("2023-11-05T17:00:00Z") },
    { customer_id: 8, name: "Sophia Markou", age: 50, registration_date: ISODate("2023-12-10T14:00:00Z") },
    { customer_id: 9, name: "Dimitris Papadopoulos", age: 25, registration_date: ISODate("2023-01-20T16:00:00Z") },
    { customer_id: 10, name: "Ilias Konstantinou", age: 29, registration_date: ISODate("2023-02-28T13:30:00Z") }
]);

print("Customers inserted successfully!");
