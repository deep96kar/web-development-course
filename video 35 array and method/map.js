let arr=[1,3,5,7,11]
let newArray=[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArray.push(element**2)
}

console.log(newArray)



let newarr=arr.map((e,index,arr)=>{//map
return e**2
})

console.log(newarr)


const graterthanseven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(newarr.filter(graterthanseven))//filter****


let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))//reduce****


console.log(Array.from("Deep"))//from