//for..in iterate over enumerable string properties of the object
//enumerable-properties of the object that are internally set as "enumerable: true" (this also can be explicitly changed and checked by ispropertyenumerable method) 
//fetches in random manner
const obj={
    js: "javascript",
    py: "python",
    cpp:"C++",
    jv:"java",
    rb:"ruby",
    go: "go"
}

// for (const key in obj) {
//     console.log(`${key}   :   ${obj[key]}`);
// }

const map= new Map()

map.set(1,"a");
map.set(2,"b");
map.set(3,"c");
map.set(4,"d");
map.set(5,"e");
map.set(1,"a");

// for(const key in map)//It outputs nothing as there are no string enumerable propertie in map set to true
// {                   // and as it searches but finds none so it doe not runs that is why it does not throw an error also
//     console.log(key);
    
// }

let arr=["Hey","Are","You","For","Real","?"]

for( let key in arr )
{
    console.log(`-------${arr[key]}`);
}