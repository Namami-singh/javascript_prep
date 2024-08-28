const user= new Object()
// const user={}
// console.log(user);

user.name="Elon"
user.age=47
user.email="elon@tsla.com"
user.account_type="verified"
user.monetization ="monetized"

// console.log(user);

const regulerUser={
    email:"random@goat.com",
    Name:{
        fullname:{
            firstname:"Elon",
            lastname:"musk"
        }
    },
    Companies:["Tesla", "Neuralink"]
}

// console.log(regulerUser.Name?.fullname.firstname)

const obj1={0:'a',1:'b'}
const obj2={2:'c',3:'d'}

// const combined=Object.assign(obj1,obj2)
// console.log(combined)
// console.log(obj1);

// console.log(combined==obj1);//true

// const combined2=Object.assign({},obj1,obj2)
// console.log(combined2==obj1);//false

const obj3={...obj1,...obj2}
// console.log(obj3);

const totalusers=[
    {
        id:1111,
        email:"random@element.com"
    },
    {
        id:2222,
        email:"random@element.com"
    },
    {
        id:3333,
        email:"random@element.com"
    },
    {
        id:4444,
        email:"random@element.com"
    }
]

// console.log(totalusers[0].id)
// // console.log(totalusers)

// console.log(Object.keys(totalusers));
// console.log(Object.values(totalusers));
// console.log(Object.entries(totalusers));

console.log(user.hasOwnProperty("powerups"));//to check whether this obj have this particular 
