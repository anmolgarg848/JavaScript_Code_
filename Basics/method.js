// function inside Object 
function info(){
    console.log(`${this.name},  ${this.age}`)
    console.log("hello bhaiya")

}
const person = {
    age:12,
    name:"anmol",
about :function(){
    console.log("Hi I am Function Inside Objects ")
    console.log(`${this.name},  ${this.age}`)

},
infoo:info
}

person.about()
person.infoo()


console.log(` ${2*3}  ${4+5} `)
