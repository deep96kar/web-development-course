const fs =require("fs")
console.log(fs)

console.log("starting")
// fs.writeFileSync("deep.txt","deep is a good boy")
//this is callback hell
fs.writeFile("dep.txt","deep is a good boy",()=>{
    console.log("done1")
    fs.readFile("dep.txt",(error,data)=>{
        console.log(data.toString())
        console.log("done3")
    })
})

fs.appendFile("deep.txt"," deepk",(error,data)=>{
console.log(data)
console.log("done2")
})
console.log("ending")