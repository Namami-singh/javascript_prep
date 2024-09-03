let num=[0,1,2,3,4,5,6,7,8,9,10]

// let increasedNum=num.map(function(value){return value+10})
// increasedNum= num.map((value)=>(value*10))

// console.log(increasedNum);

const newNum=num
                .map((val)=>val*10)
                .map((val)=>val+1)
                .filter((val)=>val>40)//the result of the previous function becomes input to the next one

console.log(newNum);