// javasript functions


function nice(name) {
    console.log("hey " + name + " you are nice!")
    console.log("hey " + name + " you are good!")
    console.log("hey " + name + " your tshirt is nice!")
    console.log("hey " + name + " you are the best!")
}
// nice("Deep karmakar")

// nice("Rahul pal")

function sum(a, b , c = 10) {
    // console.log(a + b)
    return a + b + c
}

result1 = sum(55, 99)
result2 = sum(50, 99)
result3 = sum(45, 99)

console.log("the sum of these number is: ", result1)
console.log("the sum of these number is: ", result2)
console.log("the sum of these number is: ", result3)


// arrow function
const func1 = (x)=>{
    console.log("i am an arrow function", x)
}

func1(34)
func1(45)
func1(94)