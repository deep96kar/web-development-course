use("ecommerce");

db.contacts.deleteOne({ name: "Alice" })

db.contacts.deleteMany({ name: "Alice" })

db.contacts.deleteMany({ age: { $lt: 30 } })

db.products.deleteOne({ name: "Gaming Laptop" })

db.products.deleteMany({ category: "Electronics" })

db.orders.deleteMany({ status: "Cancelled" })

