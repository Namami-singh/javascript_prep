let timeblock=document.querySelector(".time");

setInterval(() => {
    let time=new Date();
    timeblock.innerHTML = time.toLocaleTimeString();
}, 1000);


//extraas 


const alarm=document.querySelector(".alarm");
const alarm_set_popup=document.querySelector(".alarm-popup");
const form=document.querySelector("form");
const time_slot=document.querySelector("#date-time");
const close=document.querySelector(".close");
const audio=document.querySelector(".alarm-audio");
const set_btn=document.querySelector(".btn-set");



alarm.addEventListener("click",(e)=>{
    alarm_set_popup.style.display="inline-block";
    alarm_set_popup.style.top="-35vh";
    alarm_set_popup.style.left="35vw";
});


form.addEventListener("submit",(e)=>{ 
    e.preventDefault();
    set_btn.innerText="✔️";

    const time=time_slot.value;
    setAlarm(time);
    
});



close.addEventListener("click",(e)=>{
    alarm_set_popup.style.display="none";
});


const setAlarm=function(time){

    const right_now = new Date();
    const right_now_in_ms = right_now.getTime();

    const Date_string = right_now.toLocaleDateString();


    let [month,day,year] = Date_string.split('/');
    let [hour,min] = time.split(':');
    

    if( hour < right_now.getHours() || ( hour==right_now.getHours() && min<=right_now.getMinutes() ) ){
        day=parseInt(day)+1;
    }
    

    const time_to_ring =  new Date(year,month-1,day,hour,min);
    const time_to_ring_in_ms = time_to_ring.getTime();
    

    const dist_time = time_to_ring_in_ms  -  right_now_in_ms;
    

    setTimeout(() => {//alarm

        audio.loop=true;
        audio.play();

    }, dist_time);
    
}


function show_alarms(time){
        //to show the alarms
        const div=document.createElement("div");
        const p=document.createElement("p");
        const span=document.createElement("span");
        const button=document.createElement("button");
        const text=document.createTextNode(`Alarm at ${time}`);
        span.appendChild(text);
        //complete this , you have to style the button and show all the current alarms to come in this div
        //as para is a block ele so put span and buttin into it
}