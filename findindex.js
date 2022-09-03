let arr=[1,3,4,5,7,9,6,8]
let foundElement=arr.find(handleFind)

function handleFind(el,i,arr){
    return el%2===0
}

console.log(foundElement)

let foundIndex=arr.findIndex(handleFindIndex)

function handleFindIndex(el,i,arr){
    return el%2===0
}
console.log("foundIndex-->",foundIndex)

