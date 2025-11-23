use("ecommerce");

// db.products.updateOne(
// { name: "Wireless Mouse" },
// { $set: { price: 899 } }
// )

// db.products.updateMany(
// { category: "Electronics" },
// {$inc: {stock: 11}})

db.products.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "Mouse" } }
)

db.products.updateMany(
{ category: "Electronics" },
{ $set: { warranty: "2 years" } }
)

db.products.updateMany(
{ category: "Electronics" },
{ $unset: { discontinued: "" } }
)

db.products.replaceOne(
{ name: "Gaming Laptop" },
{ name: "Gaming Laptop", price: 1499, category: "Electronics", stock: 30, tags: ["Laptop", "Gaming"], warranty: "2 years" }
)

db.products.replaceOne(
{ name: "USB-C Charger" },
{ name: "USB-C Charger", price: 29, category: "Accessories", stock: 100, tags: ["Charger", "USB-C"] }
)
db.products.find()


