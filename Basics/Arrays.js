// same as list in python 
let arr = [1,2,3,"ello"]
console.log(arr)
//confirms whether its an array or not 
// bcoz there is a bug in js typeof gives object only bcoz of considering  old already written codes 
Array.isArray(arr)

arr.push("2336666")
arr.pop()


// Array Destructuring 
let ls = [1,2,3,2,3,2,3]
const [ v1,v2,,v3,...a] = ls
console.log(v1)
console.log(v2)
console.log(v3)
console.log(a)

