// Exercise 6: Range query using registration_date

use company_db;

db.customers.find({
    registration_date: {
        $gte: ISODate("2023-01-01T00:00:00Z"),
        $lte: ISODate("2023-06-30T23:59:59Z")
    }
}).pretty();
