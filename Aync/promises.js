// PROMISES  or   FUTURE

// Basic Example
const bucket = ['coffee','chips',"vegetables",'salt','rice']

// Creating Promise 
const myDish  = new Promise((resolve,reject)=>{
if(bucket.includes('vegetables')&&bucket.includes('salt')){
resolve("Fried Rice");
}else{
    reject("Sorry Darling")
}
})

// Using or consuming  Promise

myDish.then((resolved)=>{
    // resolved is an aruguement called by resolve with vale "Fried Rice"
console.log("Promise is fulfilled ",resolved)
},(error)=>{
// error is an aruguement called by resolve with vale "Sorry Darling"

    console.log("Sorry boy not fulfilled  ",error)
})

