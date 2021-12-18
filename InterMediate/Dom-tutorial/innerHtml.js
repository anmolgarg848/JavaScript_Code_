// Inner Html
const headLine = document.querySelector(".headline")
console.log(headLine.innerHTML)
// changing inner html of headline

headLine.innerHTML = "<h1>Inner html Changed</h1>"
// adding button with innerHtml of headline
headLine.innerHTML += "<button class= \"btn\"> Learn More</button>"
console.log(headLine.innerHTML)

