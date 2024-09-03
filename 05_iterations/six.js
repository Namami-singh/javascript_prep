let arr=["js","rb","go","py","java","cpp"]

// let result=arr.forEach((value)=>{
//     console.log(value);
//     return value;
// })
// console.log(result);//undefined as forEach returns nothing
//to solve this filter,reduce and map type high order functions were introduced

// let result1= arr.filter(function(value,index){
//     //return ""//it returns based on the condition results such as True for truthy values and vice-versa
//     //and here it is false as "" is a falsy value so result is empty

//     return "filter"//here it is considered as true for each value so all the values are returned 
//     //just this much matters that what value is being considered right now and if true is returned then it is filtered neither not
// })
// console.log(result1);

let num=[0,1,2,3,4,5,6,7,8,9]

// const result = num.filter((item)=>item>4)
// console.log(result);


//same operation using forEach 
// const filtered=[]

// num.forEach((value)=>{
//     if(value>4)filtered.push(value)
// })
// console.log(filtered);


//Example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let newBook= books.filter(function(book){
    return book.genre=="Fiction" || book.genre=="Non-Fiction"
})

newBook=books.filter((book)=>(book.genre=="History"&& book.edition > 2004))
console.log(newBook);

