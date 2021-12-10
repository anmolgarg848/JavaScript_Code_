// same concept as child and parent class hierarchy in java 

const obj1 = {
    key1 :"value1",
    key2 :"value2"
}
// connecting obj 1 and 2  __proto__ dunder 
const obj2  = Object.create(obj1) //obj2 is empty
obj2.key3 = "value3"
console.log(obj2.key2)
console.log(obj2.__proto__)


//fn as an Object
function hello(){
    console.log("hello World")
}
console.log(hello.name) //checks whether fn with this name exist or not 
// adding  own properties into fn 

hello.myownproperty = "ello bhaiya"
console.log(hello.myownproperty)
