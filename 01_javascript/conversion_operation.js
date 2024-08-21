let score="hitesh"
//console.log(typeof (score))

let value=Number(score)
// console.log(value) //NaN
// console.log(typeof value) //number

let score1="33"
let value1=Number(score1)
// console.log(value1) 
// console.log(typeof value1)

// "11" => 11
// "11abc" => NaN
//  true => 1; false => 0

let temp="tony"
let tempbool=Boolean(temp)
//console.log(tempbool)//true
//"tony"-true , "" - false , 0 - false, 1-true

let num=undefined
let numstring=String(num)
// console.log(numstring)
// console.log(typeof numstring)

let pos=1
let neg=-pos
//console.log(neg);

//----operations-----

// console.log(2+10);
// console.log(2-1);
// console.log(2*1);
// console.log(2**3);
// console.log(10/5);
// console.log(2%3);

let first="hello "
let sec="chai"
let full=first+sec
//console.log(full);

// console.log("1"+2);//12
// console.log(1+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32

//console.log( (3 + 4) * 5 % 3);//2

// console.log(+true);//1
// console.log(+false);//0
// console.log(+"");//0
// console.log(+"true");//Nan

let num1,num2,num3
num1=num2=num3=2+2
//console.log(num1==num2 && num2==num3);

let count=100;
console.log(count++);//first print then increase 
console.log(++count);//first increase then print
