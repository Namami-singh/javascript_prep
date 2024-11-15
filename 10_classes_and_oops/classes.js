//after ES6
// let password="pass"

// class user{
//     constructor(username,email,password){
//         this.username=username
//         this.password=password
//         this.email=email
//     }

//     encryptpassword(){


// incorrect one// console.log(`${password}123ecrypt`);// here it first checks its execution context then goes for the global execution context
//         //that is why if the password in line 2 is defined no error is encountered



//         console.log(`${this.password}123ecrypt`);//here the this is binded with the object so it looks for objects variables
//         //this keyword makes it specific that which ever thing is calling me  I am looking for called things in the calling entity.
//         //jisne bulaya uska object
//         return ""
//     }
//     capitalizeUsername(){
//         console.log(`${this.username.toUpperCase()}`);
//         return ""
//     }
// }

// const user1= new user("main","main@google.com","passkey1234@")
// console.log(user1);
// console.log(user1.encryptpassword());
// console.log(user1.capitalizeUsername());


//Behind the scenes

function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password

    // function encryptpassword(){                      //will not work cause it is passed to other objects because things are passed to 
    //     console.log(`${this.password}ecrypt@123`);   //objects by inheriting prototypes
    // }
}

user.prototype.encryptpassword=function(){
    console.log(`${this.password}encrypt@123`)
}
user.prototype.capitalizeUsername=function(){
    console.log(`${this.username.toUpperCase()}`)
}

const tea =new user("tea","tea@chai.com","almostchai!10")
console.log(tea);
console.log(tea.encryptpassword())
console.log(tea.capitalizeUsername())


