// events
// Click event

// Adding event 
console.log("Events in JavaScript")
// const btn = document.querySelector(".btn-headline")
// console.log(btn)
// // Object representation of button
// console.dir(btn)
// btn.onclick = function(){
//     console.log("You Clicked me")
// }

// Adding event using addEventListener
function clickme(){
    console.log("You Clicked me")
}
// btn.addEventListener("click",clickme)

// Adding event on multiple buttons at once 
const allButtons = document.querySelectorAll("button") //returns NodeList 
console.log(allButtons)
// Using loop
for(let btn of allButtons){
    btn.addEventListener("click",clickme)
}
// Objects in events 



