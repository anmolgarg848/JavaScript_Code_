// console.log(window)
console.dir(document)
// document Object methods
// 1. get element by id
// takes the element id as an arguement 
console.log(document.getElementById("main-heading"))
console.dir(document.getElementById("main-heading"))
// 2. Query Selector 

// accessing ID using #
console.log(document.querySelector("#main-heading"))
// accessing header class 
const header = document.querySelector(".header")
console.log(header)

// Accessing all items under the element
const navItems = document.querySelectorAll(".nav-items")
console.log(navItems)

// changing element style using JavaScript
const mainHeading  = document.getElementById("main-heading")
console.log(mainHeading.textContent)
// changing text
mainHeading.textContent = "Text Has been Changed Buddy"
// changing styles
mainHeading.style.color = "white"
mainHeading.style.backgroundColor = "blue"
mainHeading.style.border = "12px solid green"

// get and set attributes
// gives first Occurrence 
const link = document.querySelector('a')
console.log(link)
console.log(link.getAttribute("href"))

const inputElement = document.querySelector(".form-todo input")
console.log(inputElement)
// now we need the value of type attribute
console.log(inputElement.getAttribute("type"))
// setting or changing Attribute values
link.setAttribute("href","https://www.youtube.com/")
console.log(link.getAttribute("href"))

// getting multiple elements using getElements by class name
// getting multiple elements using query selector all
// task ==> select all those elements whose class is "nav-items"
let allnavItems = document.getElementsByClassName("nav-items")
console.log(allnavItems)
allnavItems = document.querySelectorAll(".nav-items")
console.log(allnavItems)
// looping --> Task change all text and backroung color of all nav elements using looping 
// get elements by tagname
const navTag = document.getElementsByTagName("a")
console.log(navTag)
for(let i =0;i<navTag.length;i++){
    const a = navTag[i]
    
    a.style.color = "green"
    a.style.fontWeight = "bold"

}





