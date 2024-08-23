/*IN JS arrays are not fixed size ,index starts from zero, can store different values and datatype needs to restricted 
then we have to eplictly specify it and create shallow copy when copied*/
//shallow=same reference 
//deep= completely new array

//array

let arr=[0,1,2,3,4,true]
// let arrobj= new Array(1,2,3,4,"hello")
// console.log(arrobj)
// console.log(arr[1]);

// let copyarr=arr// in this copyarr conatins a shallow copy of arr
// copyarr[0]=10//here we change the copyarr value but the value of arr also changes that proves it is a shallow copy
// console.log(arr[0])//10

// array methods

// arr.push("oye")//adds at the last end 
// console.log(arr)
// arr.pop()//deletes from the last end
// console.log(arr)

// arr.unshift(10)//to introduce element in the start but not optimal as it shifts all element 
// console.log(arr)
// arr.shift()//to remove element from the start
// console.log(arr)
// console.log(arr.includes(0))//returns true or false 
// console.log(arr.indexOf(1))//index for existing and -1 for non-existing

// let newarr= arr.join('-')//returns elements with separator that is provided in the param else the defaults
// console.log(arr)
// console.log(newarr)

//slice ,splice 
console.log("A",arr.slice(1,5))
console.log(arr)
console.log("B",arr.splice(1,5))
console.log(arr)
