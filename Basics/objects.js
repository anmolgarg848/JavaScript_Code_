//same as HashMaps and dictionaries
let person  = {name:'123'}
// adding key value pair
person.gender  = 'male'
person.gender  = 36 
var k = 2369
person[k]  = '123'
// In JS By Default keys taken in string 
console.log(person)
// in loop
for(let key  in person){
    console.log(typeof key ,typeof person[key],key,person[key])
}
// of loop
for(let key of Object.keys(person)){
    console.log(typeof key ,typeof person[key],key,person[key])
}
for(let val of Object.values(person)){
    console.log(typeof val ,val)
}
//Computed Properties 
let key1 = 123
let key2 = 3
let val1 = 23
let val2 = 123

let obj = {
    [key1] : val1,
    [key2] : val2
}
// Object destructuring 
let d = {
    k1:2,
    k2:3,
    k3:4 
}

const {k1,k2,k3} = d
// key name must be same to destructure their values
// below v1 will store the value of key k1
const {k1:v1,k2:v2,...rest_pair} = d
console.log(k3)
console.log(rest_pair)
console.log(v1,v2)
console.log(d)


