//reduce can take four args accumulator,value,index,array
//csn be used to add the price of items in cart

let arr=[1,2,3,4,5]

let initialval=0

// let result=arr.reduce((accumulator,value)=>{

//     console.log(`accumulator:${accumulator} and value:${value}`);
//     return accumulator+value;//provided in the next call to the same callback as the value of accumulator

// }, initialval)

// console.log("result: ",result)

// let sum=arr.reduce((acc,val)=>acc+val,0);
// console.log(sum);

let courseBundle=
[
    {
        name:"Blockchain course",
        price:1799
    },
    {
        name:"JS course",
        price:899
    },
    {
        name:"Python course",
        price:899
    },
    {
        name:"Web course",
        price:999
    },
    {
        name:"Cybersecurity course",
        price:1999
    },

];

let TotaPrice=courseBundle.reduce((acc,val)=>val.price+acc,0)
console.log(TotaPrice);
