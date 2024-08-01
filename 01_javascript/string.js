let name1="Chris"//primitive string
let str2=`${name1} my friend,how are you?!`
// console.log(str2)
let name2 = " evans"

// console.log(name1 + name2);
// console.log(str2.indexOf("my"))//default starting index=0 
// console.log(str2.indexOf("my",-10))//-10 considered as zero
// console.log(str2.indexOf("my",18))
// console.log(str2.indexOf("my",0))
// console.log(str2.indexOf("my",1))

let objstr= new String("Hello There")

console.log(objstr);
// console.log(objstr.constructor)
// console.log(objstr.length)
// console.log(objstr.toUpperCase())
// console.log(objstr.slice(-10,-4))
// console.log(objstr.slice(0,-4))
// console.log(objstr.slice(0,4))
// console.log(objstr.slice(0,17))
// console.log(objstr.slice(-12,-11))

// console.log(`The utf-16 code${objstr.codePointAt(0)} is equal to ${objstr.charAt(0)}`)
//charCodeAt returns the UTF code representing
//the char at the index (range 0-65535) we provide and charAt gives the character

let jap="𠮷𠮾"//here as the japanese lang representation moves above the 65535 value which is the max charcodeAt returns that is why it returns
//an invalid UTF code so using codePointAt we can represent char with UTF number alrger than that

// console.log(jap.codePointAt(0))

// console.log(objstr.replace("Hello","Tillu"))
// console.log(objstr.replace(/He/i,"ki"))//using regex

let newstring= "    hehehe-eehheee    "
console.log(newstring.trim());
console.log(newstring)

console.log(newstring.includes("eehh"));
console.log(newstring.includes("eehe") );
console.log(newstring.split("-"));
