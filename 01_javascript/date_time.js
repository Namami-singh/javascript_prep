let today= new Date();
// console.log(today);
// console.log(today.toString());
// console.log(today.toDateString());
// console.log(today.toJSON());
// console.log(today.toLocaleDateString());
// let newdate=today.toLocaleDateString('en-IN',{
//     weekday:'long',
//     day:'numeric',
//     month:'2-digit',
//     year:'numeric'
// })
// console.log(newdate)

// let timestamp=Date.now()
// console.log(timestamp)//for miliiseconds till now fro jan1 1970
// console.log(today.getTime())//to get milliseconds of that particular time
// console.log(Math.floor(timestamp/1000))//to convert milliseconds to seconds used floor to remove after decimal point digits

//console.log(typeof today)

// let newdate1=new Date(2024,0,23)//yyyy-mm-dd
// console.log(newdate1)
// let newdate2=new Date(2024,0,23,5,3)//yyyy-mm-dd ans time after that 
// console.log(newdate2)
// let newdate3=new Date("2024-01-01")//yyyy-mm-dd using string
// console.log(newdate3)
// console.log(newdate3.toDateString())
// let createddate= new Date("01-23-2024")//mm-dd-yyyy another format
// console.log(createddate)
// console.log(createddate.toLocaleString())

let newcreateddate= new Date()
console.log(newcreateddate.getMonth()+1)//Indexing starts with 0
console.log(newcreateddate.getFullYear());
console.log(newcreateddate.getDay());//indexing 1-monday and so forth
console.log(newcreateddate.getDate());
console.log(newcreateddate.getTimezoneOffset());
console.log(`$today is ${newcreateddate.getDay()} that is thursday`)