console.log("hello")

let id =19                           //block scope 
const aadharNumber=111122220000      //cannot be changed
var Name="John fernandes"            //function scope not block scope
present = false

//aadharNumber=3333444444            //cannot be done as it is a constant variable

console.log(id)                       //log out a value 

console.table([id,aadharNumber,Name,present])//log out in the form of a table 


console.log(typeof present)           //check the type of a variable 
console.log(typeof (Name))           //it can be done in both ways as written 

/*
NOTE-if let is used before declaration it is a refernceerror but in var it is defined as undefined but both are hoisted.
mostly let is preferred over var 
*/