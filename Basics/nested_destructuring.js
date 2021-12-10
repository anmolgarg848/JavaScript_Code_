// Objects inside Arrays
 obj = [
{userId:0,firstName:'har'},
{userId:1,firstName:'harsh'},
{userId:2,firstName:'harshit'},
]


const [ user1,user2,user3] = obj
console.log(user1)

const [{firstName},,{userId} ] = obj
console.log(userId)  



for (let d of obj){
const {userId,firstName} = d
    console.log(userId,firstName)
}
