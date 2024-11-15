class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`user:${this.username}`);
    }
    static id = 1
    static createId(){
        console.log(`${user.id++}`);
        
    }
}

class Teacher extends user{//behind the scene vhi __proto__ vala kaam hota hai 
    constructor(username,email,password){
        super(username)//behind the scene it is calling the parent constrcutor function by passing Teacher as this as username as other argument
        this.username=username
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tea=new user("tea")
const chai=new Teacher("chai","chai@openai.com","pass123@10")
console.log(tea);
console.log(chai);
tea.logMe()
chai.logMe()//extended function
chai.addCourse()
// tea.addCourse()//error
// tea.createId()//static not available to objects
// chai.createId()//static not available to objects
user.createId()
user.createId()