use("ecommerce");

// db.sales.insertMany([
// { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
// { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
// { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
// { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
// { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
// ]);

// db.sales.aggregate([
//     { $match: { category: "Fruit" } },
//     { $project: { _id: 0, item: 1, quantity: 1 } },

// ]);
db.sales.aggregate([
    { $group: { _id: "$category", 
        totalSales: {$sum: {$multiply: ["$price", "$quantity"]}}
     } }, 

]);

// db.sales.aggregate([
//     { $group: { _id: "$category", 
//         averagePrice: {$avg: "$price"}
//      } },
// ]);

// db.sales.aggregate([
//     { $sort: { quantity: -1 } },
//     { $limit: 3 }
// ]);

// db.sales.aggregate([
//     { $match: { category: "Vegetable" } },
//     { $group: { _id: null, totalQuantity: { $sum: "$quantity" } } }
// ]);

// db.sales.aggregate([
//     { $project: { item: 1, totalValue: { $multiply: ["$price", "$quantity"] } } }
// ]);

// db.sales.aggregate([
//     { $group: { _id: "$category", maxPrice: { $max: "$price" } } }
// ]);

// db.sales.aggregate([
//     { $group: { _id: "$category", minQuantity: { $min: "$quantity" } } }
// ]);

// db.sales.aggregate([
//     { $match: { price: { $gt: 7 } } },
//     { $group: { _id: "$category", count: { $sum: 1 } } }
// ]);

// db.sales.aggregate([
//     { $project: { item: 1, priceWithTax: { $multiply: ["$price", 1.1] } } }
// ]);

// db.sales.aggregate([
//     { $group: { _id: "$category", averageQuantity: { $avg: "$quantity" } } }
// ]);

// db.sales.aggregate([
//     { $sort: { price: 1 } },
//     { $skip: 2 },
//     { $limit: 2 }
// ]);

// db.sales.aggregate([
//     { $match: { category: "Fruit" } },
//     { $group: { _id: "$item", totalQuantity: { $sum: "$quantity" } } },
//     { $sort: { totalQuantity: -1 } }
// ]);

// db.sales.aggregate([
//     { $project: { item: 1, price: 1, quantity: 1, totalValue: { $multiply: ["$price", "$quantity"] } } },
//     { $match: { totalValue: { $gt: 50 } } }
// ]);