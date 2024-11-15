function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power=2//added as property

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function warmDrinks(drink,price){
    this.drink=drink
    this.price=price
    console.log(this);
    
}

warmDrinks.prototype.sayWarm=function()
{
    console.log(`This ${this.drink} is warm`);
    return "sayWarm return statement";
}

let chai=new warmDrinks("chai",25)
let Tea=warmDrinks("GingerTea",30)

console.log(chai.constructor);
console.log(chai.constructor.prototype);
console.log(chai.__proto__);//as the new object inherits the prototype and properties of the constructor by defining it in the __proto__ of the new object

console.log(chai.sayWarm());

console.log(Tea);//undefined 
//as no new keyword is used so the function is simply executed and no new object is created.



// When you don't use `new`, prototype methods or properties are not added to the object created by the function call because the function is not creating an *instance* or an object. Here’s how it works and why `new` is needed for prototypes:

// ### 1. **What `new` Does**

// When you call a function with `new` (e.g., `new FunctionName()`), JavaScript does several things to create an instance:
//    - It creates a new empty object.
//    - It sets the `__proto__` of this new object to the `prototype` property of the function, linking the object to the function's prototype.
//    - It binds `this` within the function to this new object.
//    - If the function doesn’t return anything, it implicitly returns this new object.

// This means that any methods or properties defined on the function’s `prototype` are automatically available to this new object via `__proto__`.

// ### 2. **What Happens Without `new`**

// If you call a function without `new`, it behaves as a regular function call. This means:
//    - No new object is created.
//    - `this` inside the function refers to the global object (in non-strict mode) or is `undefined` (in strict mode).
//    - The function’s `prototype` isn’t involved at all.

// Without `new`, there’s no instance created, so there’s nothing to attach `prototype` properties to.

// ### Example

// Here’s an example to illustrate:

// ```javascript
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function() {
//     console.log("Hello, my name is " + this.name);
// };

// // With `new`
// const personInstance = new Person("Alice");
// personInstance.sayHello(); // Outputs: "Hello, my name is Alice"

// // Without `new`
// const regularCall = Person("Bob"); // Doesn't return an object
// console.log(regularCall.sayHello); // Undefined, as no instance is created
// ```

// In the example:
// - `new Person("Alice")` creates a new object linked to `Person.prototype`, so `sayHello` is accessible.
// - Calling `Person("Bob")` without `new` doesn’t create an object or link to `Person.prototype`, so `sayHello` isn’t available.

// In summary, `new` creates an object linked to the function’s prototype, making prototype methods accessible. Without `new`, there’s no object linked to the prototype, so those methods aren’t added. Let me know if that clarifies it!





// This below example uses the first method createdin this file  

let multi=new multiplyBy5(5);
// console.log(multi.prototype) //object do not have prototype property set
// console.log(multi.constructor);
// console.log(multi.__proto__);
// console.log(multi.power);  
//undefined//Reason-When you add a property to a function, it’s stored directly on the function
// object itself,not on its .prototype. Properties added to a function are not inherited by objects created with new.
//either to make it add properrty to .prototype or inside constructor function







//use this convo link to clear doubts (I had a talk with gpt to clear some of my doubts)-
//https://chatgpt.com/share/67373d95-ae10-8012-8445-98c50d994b86





