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
console.log(supheros.namamisayshii());
// console.log(superheros.namamisayshii());//error
