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
let result1=loginusermsg("Elon musk")
console.log(result1);
