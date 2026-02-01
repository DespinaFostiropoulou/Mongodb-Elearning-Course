// Exercise 3: Create hashed shard key on customer_id

sh.shardCollection(
    "company_db.customers",
    { customer_id: "hashed" }
);

print("Hashed sharding enabled on customer_id");
