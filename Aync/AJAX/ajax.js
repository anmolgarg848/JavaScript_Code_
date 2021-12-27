console.log("Hello I am Ajax javascript")

let fetchbtn = document.getElementById("fetchbtn")

fetchbtn.addEventListener('click',buttonclickhandler)

function buttonclickhandler(){
console.log("You Have Clicked fetch Button ")

    // Instantiates an XHR Object
const xhr = new XMLHttpRequest();

// Opening the xhr Object
// xhr.open("GET","ajax.txt",true)
// Fake Json data playing with json file
xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",true)
// Post Request 



// What to do while progressing 
xhr.onprogress = function(){
    console.log("In Progress")
}
// old fn used as .onprogress
xhr.onreadystatechange = function(){
// ready state code  are from 0-->4
// refer docs for their code values 
    console.log("Ready state is :", xhr.readyState);
if(xhr.readyState===4){
    const response = xhr.response;
    const data = JSON.parse(response)
    console.log(typeof data)
}


}


// When request fulfiiled by server 
xhr.onload = function(){
    // 200 is a response http status code like 404 not found  
    if(this.status===200){
        console.log(this.responseText)
    }else{
        // Error Handling 
        }
}
    // Error Handling 
    xhr.onerror=()=>{
        
    }
// sending  the request 
xhr.send()
// main feature of ajax ==> without reloading browser we can load data from the server to the frontend 

console.log("This will print before response as asyn is true it is not blocking code ")




}
