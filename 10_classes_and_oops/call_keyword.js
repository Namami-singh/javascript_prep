/*In JavaScript, the call() method is used to invoke a function and explicitly specify the value of this inside that function.
 It allows you to borrow functions and execute them in the context of another object.*/

function setusername(username){
    this.username=username
    console.log(this); 
    console.log(`setusername called`);
    
}

function user(username,email,password){

    // setusername.call(username)//here it takes username as the this arg
    // this in setusername becomes a temporary String object
    //in js primitives are not valid context of this 

    setusername.call(this,username)
    this.email=email,
    this.password=password
}

const user1=new user("Chai","chai@google.com","passit@1234")

console.log(user1);

//-------some notes------

    //If thisArg is not passed, call defaults this to:
    // window (or global in Node.js) in non-strict mode.
    // undefined in strict mode.

    // If a primitive (like a string, number, or boolean) is passed as thisArg, it is converted to its object wrapper (String, Number, Boolean).
    /*function showValue() {
        console.log(this);
        }

        showValue.call(42); // Output: [Number: 42]
        showValue.call("hello"); // Output: [String: 'hello']
    */