let str="Inside Facebook, Jordan Walke found a way to generate UI elements for iOS from a background JavaScript thread, which became the basis for the React web framework. They decided to organize an internal Hackathon to perfect this prototype in order to be able to build native apps with this technology."
let str2=str.indexOf(", which")
console.log("str2-->",str2)
let str5=str.indexOf(" They decided")
console.log("str5-->",str5)

let editedPart=str.substring(str2,str5)
console.log("editedPart-->",editedPart)
let newString=(str.substring(str2,str5)).toUpperCase()
console.log("newString-->",newString)
let resultStr=str.replace(editedPart,newString)
console.log("resultStr-->",resultStr)

