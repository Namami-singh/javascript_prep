let timeblock=document.querySelector(".time");


setInterval(() => {
    let time=new Date();
    timeblock.innerHTML = time.toLocaleTimeString();
}, 1000);