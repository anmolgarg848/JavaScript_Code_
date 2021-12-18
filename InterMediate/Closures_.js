// fn can return fn 
// Example one 
function outerFunction(name){
    function InnerFunction(){
    console.log("hello World",name)
    }
    return InnerFunction;

}
const ans = outerFunction("anmol bhai")
console.log(ans) //prints whole fn 
ans() // Closure ans will contain fn as well as local memory with it packed as a closure with it

// Example 2
function hello(c){
    const a = 123
    const b = 12
    return function(){
        console.log(a,b,c)
    }
}
const res  = hello("4566")
res()


// Applications of Closures

// 1. Returned Function can only allowed to call once 
function func(){
    let cnt = 0
    return function(){
        if(cnt<1){
            console.log("Hi you called me")
        cnt++;
        }else{
            console.log("I am already called ")
        }
    }
}

const call1 = func()
call1() //closure
call1() // cnt value will be increased

const call2 = func()
call2()
call2() // cnt value will be increased in the heap memory of function execution context




