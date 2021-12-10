// this  call   apply    bind 

const user1 = {
    firstName:"harshit",
    age:8,
    about:function(){
        console.log(this.firstName,this.age)
    }
}
const user2 = {
    firstName:"harshita",
    age:9,
    about:function(){
        console.log(this.firstName,this.age)
    }
}
// here this will be binded to user2
user1.about.call(user2)
user1.about.apply(user1)
const func =user1.about.bind(user1)
func()
 

