console.log("ASYNCHRONOUS PROGRAMMING ")
// Same a MultiThreading In java 

// SETTIMEOUT FUNCTION
// It takes a fn as an arguement 
console.log("script start")
function hello(){
    console.log("Hello World!")
}
// Time delay in milli second 
// setTimeout(hello,0) //minimum delay buddy 


// This fn also returns an ID 
const id = setTimeout(hello,0)  
console.log(`ID==>${id}`)
// now I dont want to run that fn 
clearTimeout(id)
console.log("script end ")
// =====================================
// setInterval function 

let flag = 2
// setInterval(() =>{
// console.log("Runs after every given time Interval")
// flag++;

// },1000)



