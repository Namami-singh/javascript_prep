let arr1=["Elements","Of","Earth"]//literal declaration
let arr2=["makesup","the","nature"]
// console.log(typeof arr1)

// arr1.push(arr2)//pushes the array as a whole into the arr1 
// console.log("A",arr1)
// console.log("B",arr1[3][1])

// let concatarray=arr1.concat(arr2)//returns the concatinated array do not make changes in the main array
// console.log(concatarray)

// let newarray=[...arr1,...arr2]//spreading
// console.log(newarray)

// let levelarr=[1,2,3,4,[0,1,2],10,[1,2,3,[9,0,9,[1,2,3,4]]]]
// let flattened=levelarr.flat(3)//returns the updated array do not update the present one
// console.log(flattened)
// console.log(levelarr)

// console.log(Array.isArray(["meme","culture"]))//to check is it an array or not
// console.log(Array.isArray(arr1))
// console.log(Array.isArray('meme'))

// console.log(Array.from("meme"))//to make array from provided parameter
// console.log(Array.from({name:"Namami"}))//interesting

// console.log(Array.of("meme","is","memeeee"))//to make array of provided parameter


let obj={name:"Namami",Age:20,section:"A"}

console.log(Array.from(Object.entries(obj)))//can be used to create array using objects without any fault
console.log(Array.from(Object.values(obj)))

/*Array.from()- it is imp that the param provided should be an iterable but Array.of() do not demand anything*/

// let arrobj= new Array(1,2,3,4)//constructor declaration
// console.log(arrobj)

/*type of Array is an object only*/