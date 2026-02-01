// Exercise 4: Create ranged shard key on registration_date

sh.shardCollection(
    "company_db.customers",
    { registration_date: 1 }
);

print("Ranged sharding enabled on registration_date");
