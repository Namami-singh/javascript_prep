/*IN JS arrays are not fixed size ,index starts from zero, can store different values and datatype needs to restricted 
then we have to eplictly specify it and create shallow copy when copied*/
//shallow=same reference 
//deep= completely new array

let arr=[0,1,2,3,4,true]
// console.log(arr[1]);

// let copyarr=arr// in this copyarr conatins a shallow copy of arr
// copyarr[0]=10//here we change the copyarr value but the value of arr also changes that proves it is a shallow copy
// console.log(arr[0])//10

arr.push("oye")
console.log(arr)