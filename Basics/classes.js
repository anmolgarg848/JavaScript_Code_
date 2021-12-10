// classes in java 
class Car{
    static carInfo(){
        // directly related to the class 
        return "this is car class "
    }
constructor(name,age){
this.name = name
this.age = age 
}
// defining functions here 
print(){
    console.log(this.name,this.age)
    return true
}
}

const user1 = new Car("jaguar",30)
console.log(user1.print())
class Engine extends Car{
    constructor(name,age,speed){
   super(name,age)
        this.speed = speed
    }
// function of a class 
    run(){
    return this.speed
}
// getters
get call(){
    return "Using Methods a property without parantheses"
}
// Setter 
set setName(fullName){
    const [firstName,LastName] = fullName.split(" ")
    this.firstName = firstName
    this.age = LastName
}

}

const cc = new Engine("hello",20,36)
console.log(cc.speed)
console.log(cc.call)
// Using Setters 
cc.setName = "ello bro"
console.log(cc.firstName)
console.log(cc.age)
console.log(Car.carInfo())




