const person = new Map()
person.set(1,2)
person.set(1,3)
person.set(3,2)
console.log(person)
person.get(1)
for(let [key,value] of person){
// returns array of pair 
// pair destructured 
    console.log(key,value)
}
// Adding info to object via  map 
const p1={
    id:1,
    name:"anmol"
}
const extrainfo = new Map()
extrainfo.set(p1,{age:23,gender:'male'})
console.log(extrainfo.get(p1).gender)

