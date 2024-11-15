let superheros={
    thor:"hammer",
    spiderman:"sling",

    greetingSpiderman:function(){
        console.log(`hey I am Spidy and I have ${this.spiderman}'s power Cool isn't it??`);
        
    }
}

// console.log(superheros);

Object.prototype.namami=function(){
    console.log(`Namami is present in all objects`);
    
}

// console.log(superheros.namami());

Array.prototype.namamisayshii=function(){
    console.log(`Namami says hii from Arrays prototype`);
    
}

let supheros=["thor","spidy"]

// console.log(supheros.namami());
// console.log(supheros.namamisayshii());
// console.log(superheros.namamisayshii());//error


//inheritance 

const user={
    name:"chai",
    email:"chai@gmail.com"
}
const teacher={
    makecontent:true,
    publish:true,
}
const TAsupport={
    makeAssignments:true,
    fulltime:true,
    __proto__:teacher
}
const admin={
    updatematerials:true
}
admin.__proto__=teacher//old method


//modern syyntax 
Object.setPrototypeOf(admin,TAsupport);
console.log(admin.publish);

String.prototype.trueLength=function(){
    console.log(this);
    console.log(`True length excluding the whitespaces ${this.trim().length}`);
}
let chai="ChaiAurCodeeeee   "

chai.trueLength()
"  Codeiiii  ".trueLength()
