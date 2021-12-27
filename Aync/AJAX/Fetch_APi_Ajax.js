// Using Fetch Api to retrieve data  from server 
// new Technology replacement of Ajax==> xhr
const url = "https://jsonplaceholder.typicode.com/posts";

// returns Promise
fetch(url).then(response=>{
    if(response.ok){
        return response.json;
    }else{
        // Error  will go as an arguement in  Catch 
        throw new Error("Something Went Wrong ")
    }
    // it also returns Promise
    
}).then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})

// To Post

fetch(url,{
method:'POST',
body:JSON.stringify({
    title:'foo',
    body:'bar',
    userId: 1,
}),
headers:{
    'content-type':'application/json; charset=UTF-8',
},
}).then(response=>{
    if(response.ok){
        return response.json;
    }else{
        // Error  will go as an arguement in  Catch 
        throw new Error("Something Went Wrong ")
    }
    // it also returns Promise
    
}).then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})

