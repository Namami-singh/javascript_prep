function print(){
    console.log("log in a function")
}
// print()

function add(num1,num2){
    if(typeof num1 === "number" && typeof num2 === "number")
    {
        let sum = num1+num2
        return sum
    }
    return "Invalid input" 
}
// console.log(add(3,5))
// let result=add(10,'a')
// console.log(result);

function loginusermsg(username= "User"){
    if(!username){
        return "Please enter a valid name"
    }
    return `welcome ${username}, you just logged in`
}

// let result1=loginusermsg("")
// let result1=loginusermsg("Elon musk")

// console.log(result1);



function countCartPrice(...num1){//rest operator
    return num1
}
// const cartPrice=countCartPrice(1000,300,200,500)
// console.log(cartPrice)

const User={
    Id: 10116765732889,
    subscription: "active"
}

function UserSubDefinition(mainobj){
    console.log(`The ID number ${mainobj.Id} is ${mainobj.subscription}`);
}

// UserSubDefinition(User)
UserSubDefinition({Id: 2011676542889,
    subscription: "Deactive"})


const arr=[10,60,4050,87465]
function getElementone(anyarray){
    return anyarray[1]
}
console.log(getElementone([1,2,3,4]))