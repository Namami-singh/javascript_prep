//Object literals 
let sym = Symbol("obj key")

let obj={
    name: "Namami",
    Age:18,
    [sym]:"Symbol Key",//defining symbol as key in an object
    "Full_name":"Namami singh",
    "Sir name":"Singh",
    Present:true,
    gender:"Female"

}
// console.log(obj.name)
// console.log(obj["Age"])
// console.log(obj.Full_name) /*If key string hai aur words k beech mei space hai then it cannot be accessed through dot operator */
// console.log(obj["Sir name"])// then it will be accessed only like this 
// console.log(obj[sym])//to access symbol
// console.log(obj)

// obj["Present"]=false //overwriting values
// Object.freeze(obj) //freezes the object and does not allow any further change in the object
// obj.present=true
// console.log(obj.Present)

// obj[sym]=20n        //overwrting symbol key in the object
// console.log(typeof obj[sym])

obj.greeting=function(){
    console.log("hello greetings from this side!!🌞")
    return "Explicitly returned"
}
obj.personGreeting = function(){
    console.log(`Hello ${this.name} this side`)
}
// console.log(obj.greeting)//returns the reference of the function
console.log(obj.greeting())
console.log(obj.personGreeting());//as this functions dont explicitly returns anything that is why it implicitly returns undefined and it gets printed

