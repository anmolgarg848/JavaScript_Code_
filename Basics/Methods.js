// Important Array Methods 

const  arr = [1,2,3,4]
function f(n,idx){
    console.log(n*idx)
return `${n},${idx}`
}
  arr.forEach(f)
// console.log(fe,"foreach")
const newarr =   arr.map(f)

console.log(newarr)


const evenNum = arr.filter(function(ele){
return ele%2===0
})
console.log(evenNum)
// reduce method Using Arrow Function 
const a = [2,3,4,5,6,2,3,6,10]
const s = a.reduce((accumulator,currValue)=>{
    return accumulator+currValue
})

console.log(s)
// Sorting 
a.sort((x,y)=>x-y)

console.log(a)
const products = [
    {productId:1,productName:"p1",price:300},
    {productId:3,productName:"p2",price:30000},
    {productId:2,productName:"p3",price:30000},
    {productId:1,productName:"p4",price:100}
]
// sort on the basis of price asc cloning 
let prd = products.slice(0).sort((c,d)=>{
return c.price-d.price
})
console.log(prd)

// find method 
prd = products.find((pd)=>pd.productId===3)
console.log(prd)
// every method 
let chck = products.every((pd)=>pd.productId<6)
console.log(chck)
// some Method
// do we have any product id > than 6
chck = products.some((pd)=>pd.productId>3)

console.log(chck)
// Fill Method takes value ,strtidx,endIdx
let myarr =  new Array(10).fill(-1)
console.log(myarr)

// Splice Method
// start ,delete ,Insert 
myarr.splice(0,myarr.length,2)
console.log(myarr)



