// To replace  Promise chaining syntax we use await()
const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(){
    // always returns a promise 
    // waits until response came as resolved in background handles by browser
  const response  =  await fetch(url);
if(!response.ok){
    throw new Error("raised into catch block error handling ")
}
  const data = await response.json();
  console.log(data)
// data is a promise 
return data;
}

getPosts().then(mydata=>{
    console.log(mydata)
}).catch(error=>{
    console.log(error)
})


// fetch(url).then(response=>{
//         return response.json;
//    }).then(data=>{
//        console.log(data)
//    })
