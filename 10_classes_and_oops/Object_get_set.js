//this way to implement get and set is rarely used
//used in legacy code
const user={
    _email:"Doe@chaiaurcode.com",
    _password:"abc@12",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

let player=Object.create(user)//factory function
console.log(player.email);
