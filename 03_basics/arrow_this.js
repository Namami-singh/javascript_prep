//this refers to "The object that runs the function'
//for a function inside an object or refernced using an object "this- the object itself"
// for a standalone function "this-[windows-browser,global-node & others]"


const course={
    user:"Samuel",
    price:999,
    msg:function(){
        console.log(`${this.user}, welcome to the course!`);
        console.log(this);
    }
}

// course.msg()
// course.user="Nomad"
// course.msg()


// console.log(globalThis);
// console.log(this)


// function one(){
//     let username="Nomad"
//     console.log(this.username);//undefined
//     console.log(this);//bind to globalthis

//     const three= ()=> { // it does not have  its own this binding but it uses the this of its enclosing lexical contxt or the parent scope
//         let username = "hitesh"
//         console.log(this.username);//undefined, look into it
//         console.log("arrow: " , this);//{}
//     }
//     three()
// }
// one()

// const two = function(){
//     let username = "hitesh"
    // console.log(this.username);//undefined
    // console.log(this);//globalthis
// }
// two()


/* arrow function*/

// const three= ()=> { 
//     let username = "hitesh"
//     console.log(this.username);//undefined, look into it
//     console.log(this);//{}
// }
// three()


/* parameterized arrow function */

// const addtwo= (num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,3))

// const addtwo = (num1,num2)=>num1+num2

// const addtwo = (num1,num2)=>(num1+num2)

const addtwo = (num1,num2)=>({num:1})
console.log(addtwo(9,9))
