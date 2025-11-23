import fs from "fs/promises"
let a= await fs.readFile("deep.txt")
// let b= await fs.writeFile("dip.txt","\n\nthis is a amazing promise")//remove previous content
let b= await fs.appendFile("deep.txt","\n\nthis is a amazing promise")//use append 
console.log(a.toString(),b)