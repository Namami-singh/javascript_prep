//for of loop iterate over the values that the object itself defines as iterable
//The for...of loop works with iterables, which are objects that implement the iterable protocol. 
//This protocol requires the object to have a method named Symbol.iterator that returns an iterator object.
//arrays and strings have built in iterables but objects does not implement built in iterables because they do not follow 
// a particular order in properties.
//and for this same reason map works in for..of because they follow the insertion order


// let arr=[1,2,3,4,5]//iterate on values 

// for (const element of arr) {
//     console.log(element)
// }



// let str="Hello World"

// for(let char of str)
// {
//     if (char==" ") {
//         continue;
//     }
//     console.log(char);
    
// }



const map= new Map()

map.set(1,"a");
map.set(2,"b");
map.set(3,"c");
map.set(4,"d");
map.set(5,"e");
map.set(1,"a");

// console.log(map);

// for (const [key,value] of map) {//here we have destructured the array
//     // here we have an array of pairs of key and value thats why we are destructing array

//     console.log(`Key :${key}`);
//     console.log(`Value :${value}`);
    
// }



const obj={//object is not iterable
    name:"Namami singh",
    age:18
}

// for(const ele of obj)
// {
//     console.log(ele);
// }