let str="Inside Facebook, Jordan Walke found a way to generate UI elements for iOS from a background JavaScript thread, which became the basis for the React web framework. They decided to organize an internal Hackathon to perfect this prototype in order to be able to build native apps with this technology."
let str1=str.indexOf("Inside")
console.log("str1-->",str1)
let str2=str.indexOf(", which")
console.log("str2-->",str2)
let str5=str.indexOf(" They decided")
console.log("str5-->",str5)
let str6=str.indexOf("y.")
console.log("str6-->",str6)

let resu1=str.substring(str2,str5)
console.log("resu1",resu1)
let resu2=str.substring(str5,str6)
console.log("resu2-->",resu2)
let resu3=str.substring(str1,str2)
console.log("resu3-->",resu3)

let caps=resu3+resu1.toUpperCase()+resu2
console.log("caps-->",caps)