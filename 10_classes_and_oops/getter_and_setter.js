class user{

    constructor(name,password){
        this.name=name
    }

    get password(){
        return this.password.toUpperCase();
    }
    set password(value){
        this.password=value
    }
}

let chai = new user("Chai","abc")
console.log(chai.password);
