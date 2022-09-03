let str="To support React's concept of unidirectional data flow (which might be contrasted with AngularJS's bidirectional flow), the Flux architecture was developed as an alternative to the popular model–view–controller architecture. Flux features actions which are sent through a central dispatcher to a store, and changes to the store are propagated back to the view.[24] When used with React, this propagation is accomplished through component properties."

let str1=str.indexOf("(")
console.log("str1-->",str1)
let lastindex=str.indexOf(")")
console.log("lastindex-->",lastindex)
let str3=str.indexOf("[")
console.log("str3->",str3)
let lastindex2=str.indexOf("]")
console.log("lastindex2-->",lastindex2)

let result=str.substring(str1,lastindex+1)
console.log("result-->",result)

let result2=str.substring(str3,lastindex2+1)
console.log("result2-->",result2)

let newStr=str.replace(result,"")
newStr=newStr.replace(result2,"")
console.log(newStr)
