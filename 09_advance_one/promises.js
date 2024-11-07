const promise1= new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log("timeout over");
    },2000);

})

//
const promise2= new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve("timeout over");
    },2000);

})
promise2.then((msg)=>{
    console.log("inside then");
    console.log(msg);
})

//
new Promise((accept,reject)=>{
    let error=false;
    if(!error)accept("no errors");
    else reject("error");
}).then(onfulfill,onreject);

function onfulfill(msg)
{
    console.log("onfulfill " + msg);
    
}
function onreject(msg)
{
    console.log("onreject"+ msg);
    
}

//
let cleanupmsg="cleaned up";

new Promise((accept,reject)=>{      
    let error=false;
    if(!error)accept("no errors");
    else reject("error");
}).then((msg)=>{
    console.log("sucess" + msg);
}).catch((msg)=>{
    console.log("failure"+ msg);
}).finally(()=>{
    cleanup(cleanupmsg);
})

// people prefer then catch over then(onfullfill,onreject)format because in then(onfullfill,onreject) agar ki error aaya aur vo then mein 
//resolve hogya without throwing any error then error will follow down the chain even though vo reject hui thi so maintain that state catch 
//is used and only one argument is provided to then to maintain the error state sometimes in Onrejected then mthd we can explicitly throw error 
//to maintain the error state.
function cleanup(msg) {
    console.log("finally" + msg);
    
}


//
const promisenew= new Promise((resolve,reject)=>{
    let error=false;
    let obj={username:"Lmfao" , password: "kuch to hai"}
    if(!error)resolve(obj);
    else reject("error");
})
//js priortize then in its event loop over any finally present in there
promisenew.then((user)=>{
    console.log(`The beautiful name of the user is ${user["username"]}`)
    return user.password;
})
.then((password)=>{
    console.log(`The long thought password is: ${password}`);
});


//
const promise_async =new Promise((resolve,reject)=>//this section is interesting run it and try it 
{
    setTimeout(()=>{
        setTimeout(()=>{
            resolve("Inner timeout done");
        },1000);
        reject("outer Timeout");// this outputs as inner function does not execute until outer is done and when it starts we have to 
                                //wait for one sec so it is in waitng block till then execution continues and "outer Timeout"gets printed
    },2000);
})

async function promise_try(){

   try{
    let result= await promise_async;
    console.log(result);
   }
   catch(error)
   {
    console.log(error);
    
   }
}
promise_try();

/*
setTimeout is asynchronous, meaning it schedules a function to run in the future but doesn't wait for it to complete.
The try...catch block executes synchronously, so it finishes before the setTimeout callback is called.
 */

fetch("www.youtube.com")