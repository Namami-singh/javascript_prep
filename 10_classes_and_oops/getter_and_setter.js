// class person {
//     constructor(name) {
//       this.name = name; // Recursion occurs here
//     }
  
//     get name() {
//       return this.name; // This calls the getter again, causing infinite recursion
//     }
  
//     set name(value) {
//       this.name = value; // This calls the setter again, causing infinite recursion
//     }
//   }

//   let p1= new person("Tea")
//   console.log(p1.name);
  
//convo link to understand why getter and stter have different name-https://chatgpt.com/share/6738c8bd-530c-8012-bce1-7560d6c31b33


class user{

    constructor(name,password){
        this._name=name// Using _name to avoid conflicts with the getter/setter
        this._password=password // Using _password to avoid conflicts with the getter/setter
    }

    get password(){
        console.log(`getter of password`);
        return this._password.toUpperCase();        
    }
    set password(value){
        this._password=value
        console.log(`setter of password`);  
    }
}

let chai = new user("Chai","abc")
console.log(chai.password);//getter worked

chai.password=123 //when assigning value to a property setter is called 
//they cannot be called explicitly they are called  automatically when you assign a value to a property,
// as long as the property name matches the name of the setter.


// similarly getter and setter can be set up for name property in the class