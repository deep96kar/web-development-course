// Select the database to use.
use('Deepdatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "JavaScript",
      "price": 20000,
      "instructor": "Deep"
    },
    {
      "name": "Python for Beginners",
      "price": 18000,
      "instructor": "Anita"
    },
    {
      "name": "Web Development Bootcamp",
      "price": 25000,
      "instructor": "Rahul"
    },
    {
      "name": "Data Structures in C++",
      "price": 22000,
      "instructor": "Priya"
    },
    {
      "name": "Machine Learning",
      "price": 30000,
      "instructor": "Dr. Sen"
    },
    {
      "name": "ReactJS Essentials",
      "price": 21000,
      "instructor": "Deep"
    },
    {
      "name": "Full Stack Developer Track",
      "price": 35000,
      "instructor": "Neha"
    }
  ]);


// Print a message to the output window.
console.log(`done instering data`);

