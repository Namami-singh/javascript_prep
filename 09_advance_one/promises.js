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