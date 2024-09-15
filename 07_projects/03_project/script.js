let timeblock=document.querySelector(".time");
const alarm=document.querySelector(".alarm");
const alarm_set_popup=document.querySelector(".alarm-popup");
const form=document.querySelector("form");
const time_slot=document.querySelector("#date-time");

setInterval(() => {
    let time=new Date();
    timeblock.innerHTML = time.toLocaleTimeString();
}, 1000);


alarm.addEventListener("click",(e)=>{
    alarm_set_popup.style.display="inline-block";
    alarm_set_popup.style.top="-35vh";
    alarm_set_popup.style.left="35vw";
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const time=time_slot.value;
})
