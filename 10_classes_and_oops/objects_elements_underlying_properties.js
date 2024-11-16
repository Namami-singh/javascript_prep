const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

//*************//

// console.log(descriptor);
descriptor.writable=true;
// console.log(descriptor);



//*************//

Math.PI=5
// console.log(Math.PI);//unwritable

// trying to write in math.pi

// Object.defineProperty(Math,"PI",{
//     writable:true
// })
// Math.PI=5
// console.log(Math.PI);


const obj=Object.getOwnPropertyDescriptors(Math)
// console.log(obj);//whole Math Object

const chai={
    name:"ginger chai",
    price:"50",
    isAvailable:true
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

//*************//

Object.defineProperty(chai,"name",{
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))


//as the enumerable is set as false of property name it is not iterated
// for(key in chai){
//     console.log(`${key} : ${chai[key]}`);
// }


//*************//

// Object.defineProperties(chai,{     //for setting different properties at once 
//     name:{
//         enumerable:false
//     },
//     isAvailable:{
//         enumerable:false
//     }
// })

// for(key in chai){
//     console.log(`${key} : ${chai[key]}`);
// }


//*************//
// for(key in chai){
//     Object.defineProperty(chai,key,{
//         value:chai[key],
//         enumerable:false
//     })
// }

// for(key in chai){
//     console.log(`${key} : ${chai[key]}`);
// }