let programming=["js","py","java","cpp","go"]
const obj={
    js: "javascript",
    py: "python",
    cpp:"C++",
    jv:"java",
    rb:"ruby",
    go: "go"
}
//callback using normal function
// programming.forEach( function (value){
//     console.log(`${value}`);
// })

//using arrow function
// programming.forEach((value)=>{
//     console.log(`${value}`);
// })

//using a standalone function
// const print = (item,index)=>{
//     console.log(`The value at ${index} is ${item}`);
//     console.log(`${obj.js}`);
// }

// programming.forEach(print,obj);//here the second paramter refers to the obj which can this can refer to 
                                    //and only here but can also be used in above mentioned ways in same way 

// programming.forEach((value,index,arr)=>{
//     // console.log(`${index}: ${value}`)
//     // console.log(arr)
//     console.log(index + " : ",value ,arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName +" : ",item.languageName);
})