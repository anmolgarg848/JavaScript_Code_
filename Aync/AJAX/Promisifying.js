console.log("Promisifying xhr request ")

// URL TO fETCH DATA
const url = "https://jsonplaceholder.typicode.com/posts";

function sendRequests(method,url){
    return new Promise((resolve,reject)=>{
const xhr = new XMLHttpRequest();
xhr.open(method,url);
xhr.onload = ()=>{
    if(xhr.status>=200&&xhr.status<300){
        resolve(xhr.response);
    }else{
        reject(new Error("Something WENT WRONG"))
    }
}
// Especial Method for error handling by ajax 
xhr.onerror = ()=>{
reject(new Error("Something Went Wrong "))
}
xhr.send();
    })
}

sendRequests("GET",url).then(response=>{
const data = JSON.parse(response);
// console.log(data)
return data;
})
.then(data=>{
const id = data[3].id;
return id;
}).then(id=>{
    const url = `${url}/${id}`;
return sendRequests("GET",url)

}).then(newResponse=>{
    const newData = JSON.parse(newResponse);
    console.log(newData);
})
.catch(error=>{
console.log("error raised from catch ")
})

