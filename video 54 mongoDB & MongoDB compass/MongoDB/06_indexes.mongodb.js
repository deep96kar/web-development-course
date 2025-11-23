use("ecommerce");

// db.sales.find()

// db.sales.createIndex({quantity: 1})
db.sales.getIndexes()

// db.sales.createIndex({category: 1, price: -1})
// db.sales.getIndexes()

// db.sales.createIndex({item: "text"})
// db.sales.getIndexes()

// db.sales.find({$text: {$search: "Apple"}})

// db.sales.dropIndex({item: "text"})
// db.sales.getIndexes()

// db.sales.dropIndex({category: 1, price: -1})
// db.sales.getIndexes()

// db.sales.dropIndex({quantity: 1})
// db.sales.getIndexes()

// db.sales.find({quantity: {$gt: 5}}).explain("executionStats")

// db.sales.createIndex({quantity: 1})
// db.sales.find({quantity: {$gt: 5}}).explain("executionStats")

// db.sales.dropIndex({quantity: 1})
// db.sales.getIndexes()

// db.sales.find({category: "Electronics", price: {$lt: 500}}).explain("executionStats")

// db.sales.createIndex({category: 1, price: -1})
// db.sales.find({category: "Electronics", price: {$lt: 500}}).explain("executionStats")

// db.sales.dropIndex({category: 1, price: -1})
// db.sales.getIndexes()    