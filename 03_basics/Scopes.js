let a=100//block scope
var c=300//function scope rather global variable
const b=200// block scope
// console.log("global a : ",a)
// console.log("global b : ",b)
// console.log("global c : ",c)

if(true)
{
    let a=10
    const b=20
    var c=30
    // console.log("if block a :", a);
    // console.log("if block b :", b);
    // console.log("if block c :", c);
}

// console.log("After a :",a);
// console.log("After b :", b);
// console.log("After c :",c);


function one(){
    const username="User"
    var id=10
    function two(){
        const website="Webtilt"
        console.log(username,"@",website," id:",id)
    }
    // console.log(website);//error
    two()
}
// one()
// console.log(id);//error

if(true){
    let user="Musk"
    if(user==="Musk"){
        const firstname="Elon"
        // console.log(firstname +" "+ user);
    }
    // console.log(firstname);//error
    
}

// console.log(user);//error




//more about functions

console.log(increment(2));
function increment(num){
    return num+1
}




// console.log(increment2(2));//gives error
const increment2= function(num){//known as expression 
    return num+2
}
console.log(increment2(2));