//Basic operations
// console.log(2==1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2!=1);
// console.log(2>1);
// console.log(2<1);

// == is a equality operator and others are comparison operators
console.log(null==0) //null is only loosely equivalent to undefined and for loose equivalence it cannot be converted to number or string accn to ECMA rules
console.log(null>=0)//here the null gets converted to 0 
console.log(null<=0)//here also the null gets converted to 0 

console.log(undefined==0)//same reason as nul==0
console.log(undefined>=0)//when comparing Undefined to a number it is converted to NaN
console.log(undefined<=0)//and any comparison with Nan is false

//type coercion- To perform some operation one of the operator is converted to the same type as the other

// console.log("2">1)//true
// console.log("02"<1)//true

//strict check ===(check both value and type)
console.log("2"===2)
console.log(1==="1")