//Control flow there's if else ,comparison operators such as > < >= <= == ===,&& || ! -logical operators,switch case
//have not created file as they are the same typical and ypou are familiar with them

// const userEmail="N@meta.com"
// const userEmail=""
const userEmail=" "

if(userEmail){
    console.log("logged In!!");
}
else{
    console.log("Provide email");
}

// falsy values
//false,0,-0,"",null,undefined,Nan,BigInt 0n

//truthy values
//true," ",'false',function(){},[],{}

// if(userEmail.length==0){
//     console.log('provide');
// }


// const empobj={}

// if(Object.values(empobj).length==0)console.log("provide mail"),console.log("Necessarily needed");//depricated style of writing code

//Nullish coalescing (??) operator : null undefined
//to provide value according to different conditions to avoid unexpected running of code

let val;
// val=5??10
// val=null??10
// val =null ?? undefined
// val=undefined ?? null
val= null?? 10 ?? 20
console.log(val);

//Ternary operator (? :)

let IcedAmericanoPrice=100

IcedAmericanoPrice>80?console.log("greater than 80"):console.log("less than 80");




