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

// function returning Promise 
// Promises are consumed by Browser 
// MICROTASK QUEUE
function ret_pro(){
return myDish
}

ret_pro().then((resolved)=>{
    // resolved is an aruguement called by resolve with vale "Fried Rice"
console.log("Promise is fulfilled ",resolved)
},(error)=>{
// error is an aruguement called by resolve with vale "Sorry Darling"

    console.log("Sorry boy not fulfilled  ",error)
})

// CallBack Queue
// setTimeout with Promises

setTimeout(()=>{
console.log("Hello from setTimeout")
},0)


function ret_pro_withsetTimeOut(){
    return new Promise((resolve,reject)=>{
    const flag = true
        setTimeout(()=>{
                if(flag){
                resolve()
                }else{
                reject()
                }
        },2000)
    })

    }

    // promise will give response after 2 seconds after bcoz of setTimeout
ret_pro_withsetTimeOut().
then(
// if resolved
()=>{
console.log("resolved")
}
).catch(
// if rejected 
()=>{
    console.log("rejected")
    }
)

// Promise.resolve 
const myPromise =  Promise.resolve(5)
myPromise.then(
    value=>{
        console.log(value)
    }
)

// .then() method always returns promise 
// so we can do a Promise Chaining

// EXAMPLE
function myPromises(){
    return new Promise((resolve,reject)=>{
        // resolve is a fn which returning a string as "foo"
        resolve("foo")
    })
}
// Promise Chaining 
myPromises()
.then(value=>{
    console.log(value);
    value+="bar"
    // Here value is also a promise as it is returned by then method of Promises 
    return value;
})
// using returned Promise by then 
.then(value=>{
    console.log(value)

})
.then(value=>{
// By default it returns undefined 
    console.log(value)
})



