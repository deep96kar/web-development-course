// factorial the calculate
let arr = [6, 5, 4, 3, 2, 1]
let red = (a, b) => {
    return a * b
}
console.log(arr.reduce(red),"using reduce")


for (let index = 0; index < arr.length; index++) {
    // const element = arr[index]; just for meaning
    let mul = arr[index++] * arr[index++]* arr[index++]* arr[index++]* arr[index++]* arr[index++]
    console.log(mul,"using for loop")
}


