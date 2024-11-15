const user={
    username:"JS chai aur code",
    loginCount:10,
    signedIn:true,

    getUserDetails: function(){
        console.log("Get user details from database");
        console.log(`Username:${this.username}`);
        console.log(this);//user object
    }
}

//console.log(user);// this is an object literal so no instance of this can be created as this is itself an "object literal"
// and if we write a method inside it that sets the variables then we need the object for it and we cannot create different
///instances of it and only this literal object can be used.

// let user1=new user;    //this cannot happen because user is not a constructor function and new needs a constructor to make objects
// console.log(user1);

// console.log(user.getUserDetails());
// console.log(this);//global scope



function User(username,loginCount,isLoggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting= function(){
        console.log(`Welcome ${this.username}`);
    }

}

/*
let UserOne = User("hitesh",8,true);
let UserTwo = User("ChaiAurCode",6,true);
//this changes the main context of the function and do not create new memory for every call but changes the execution context

console.log(UserOne);
*/


const UserOne = new User("hiteshSir",8,true);
const UserTwo= new User("ChaiAurCode",6,true);

// console.log(User);

// console.log(UserOne);
// console.log(UserTwo);

// console.log(UserOne.constructor);// gives user function as it is the function used to make this object

console.log(UserOne instanceof Object); // as everything in js is at the end an object as array,string or 
// even a function is an object or inherits an objects functionality
console.log(UserOne instanceof User);



//new keyword working

/*
When you use `new` in JavaScript, it performs a sequence of steps to create a new instance of an object. Here’s a breakdown:

1. **Creates a new empty object**:
   - JavaScript internally creates a blank object `{}` that will ultimately become the new instance.

2. **Sets the prototype**:
   - The `new` keyword links this new object’s prototype (`__proto__`) to the constructor function’s `prototype` property.
   - This allows the new object to inherit properties and methods defined on the constructor’s prototype.

3. **Binds `this` to the new object**:
   - Inside the constructor function, `this` now refers to the new object instead of the global scope.
   - This allows you to initialize properties on `this`, which will be unique to each instance.

4. **Returns the new object**:
   - If the constructor function doesn’t explicitly return an object, `new` automatically returns the created object.

### Example:
```javascript
function Car(model) {
  this.model = model; // Step 3: `this` refers to the new object
}

const myCar = new Car("Toyota"); // `new` keyword initiates the steps
console.log(myCar.model); // "Toyota"
```

So, `myCar` is an instance of `Car` with its own `model` property set to "Toyota".
*/