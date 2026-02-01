// Exercise 2: Create readWrite user for employees collection

use companyDB;

// Enable authentication mode (προϋποθέτει mongod.conf ρύθμιση)
db.createUser({
    user: "employeeEditor",
    pwd: "StrongPassword123!",
    roles: [
        {
            role: "readWrite",
            db: "companyDB"
        }
    ]
});

print("User employeeEditor created with readWrite role.");
