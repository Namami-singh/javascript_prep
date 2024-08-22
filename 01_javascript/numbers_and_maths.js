let num=400//primitive type
//console.log(typeof num)
let num2=new Number(100000000000)//only with the help of new keyword it becomes an object
//console.log(typeof num2)

// console.log(num.constructor)//aise hi just checking the constructor of a primitive number
// console.log(num.toString().length)//number can be converted to string to utilize the string methods

// num=100.83838464563756
// console.log(num.toFixed(2))//responsible for numbers after decimal point
// console.log(num.toPrecision(2))//this is about the total value that is in the num2 value

// console.log(num2.toLocaleString('en-IN'))//to make the number more readable and returns string it can be represented in many way
// //default americn standard

// console.log(num.toExponential())


/******************Maths*******************/

// console.log(Math);
// console.log(Math.abs(-4.9555))
// console.log(Math.round(4.95))
// console.log(Math.ceil(4.20))
// console.log(Math.floor(4.9555))
// console.log(Math.min(1,3,4,1))
// console.log(Math.max(1,3,4,0.1))

console.log(Math.random())
console.log(((Math.random())*10)+1)
console.log (Math.floor(((Math.random())*10)+1))

//to come up with the values within the same boundary 
let maxi=20
let mini= 9

console.log((Math.random()*(maxi-mini+1))+mini)