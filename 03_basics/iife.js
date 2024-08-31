// Immediately invoked function expresion
//mostly written to keep the global from polluting the function and also for DB connection
(function chai(status) {
    //named iife
    console.log(`DB ${status}`);
})('Connected');

((name)=>{
    console.log(`Welcome, ${name}`);
})('Namami');
