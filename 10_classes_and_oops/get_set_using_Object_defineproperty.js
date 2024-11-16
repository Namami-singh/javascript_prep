function user(name,email){
    this._name=name
    this._email=email

    Object.defineProperty(this,"name",{
        get:function(){
            console.log(`getter of name`);
            return this._name.toUpperCase();   
        },
        set:function(value){
            console.log(`setter of name`);  
            this._name=value
        }
    })
    Object.defineProperty(this,"email",{
        get:function(){
            console.log(`getter of email`);
            return `${this._email}@google.com`  
        },
        set:function(value){
            console.log(`setter of email`);
            this._email=value
        }
    })
}

const user1= new user("john doe","doe")
// console.log(user1.name);
// console.log(user1.email);
user1.name="John doe 1"
user1.email="John.doe"
console.log(user1.name);
console.log(user1.email);


