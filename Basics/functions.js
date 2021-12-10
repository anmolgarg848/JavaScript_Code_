console.log(sum(1,2))

// Function Declaration 
 function sum(a,b){
return a+b 
 }
 //function expression//Anonymous function 
const sub = function(a,b){
    return a-b 
}
console.log(sub(2,1))
// arrow Functions

const Arrow_fn_to_multiply = (a,b)=>{
    return a*b
}
console.log(Arrow_fn_to_multiply(200,100))
// Call Back functions

function f1(){
    console.log("Hi I am f1")
}
function f2(callback){
    console.log("Hi I am f2")
    console.log(callback) //a is a function 
// so we can call a as a function and can use it 
    callback()
    // f1()
}

f2(f1)
