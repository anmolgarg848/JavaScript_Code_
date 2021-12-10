// using __proto_-  and prototype remember both are different

// constructor function 
function createUser(firstName,LastName,email,age){
const user = Object.create(createUser.prototype)
// user is an empty object 
user.firstName = firstName
user.LastName = LastName
user.email = email
user.age = age
return user;
}
// setting values in fn default prototype
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old. `
}

const user1 = createUser('anmol',"garg","anmolgarg848",21)

console.log(user1.about())

//using new Keyword we dont need to use prototype
const user2 = new createUser("harshita","shukla","h27",25)
console.log(user2.about())

