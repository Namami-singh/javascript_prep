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
const alarm_records=document.querySelector("#Alarm-record");


alarm.addEventListener("click",(e)=>{  //to bring popup
    alarm_set_popup.style.display="inline-block";
});


form.addEventListener("submit",(e)=>{ 
    e.preventDefault();
    set_btn.innerText="✔️";

    const time=time_slot.value;
    setAlarm(time);
    
});



close.addEventListener("click",(e)=>{// to close the popup
    alarm_set_popup.style.display="none";
    set_btn.innerText="SET"; //to manage line 31
});


const setAlarm=function(time){

    const right_now = new Date();//time right now
    const right_now_in_ms = right_now.getTime();//get ms till right now

    const Date_string = right_now.toLocaleDateString();//get date


    let [month,day,year] = Date_string.split('/');//split gives us an array of seaparated strings based on delimiter
    let [hour,min] = time.split(':');             // and then we destructure the array in this way 
    

    if( hour < right_now.getHours() || ( hour==right_now.getHours() && min<=right_now.getMinutes() ) ){
        //to manage next day alarms
        day=parseInt(day)+1;
    }
    

    const time_to_ring =  new Date(year,month-1,day,hour,min);//date and time of that alarm
    const time_to_ring_in_ms = time_to_ring.getTime();
    

    const dist_time = time_to_ring_in_ms  -  right_now_in_ms;//to get differnce to use in timeout
    

    const timeout=setTimeout(() => {//alarm
        audio.loop=true;
        audio.play();
    }, dist_time);
    
    show_alarms(time,timeout);//show upcoming alarm records

}


function show_alarms(time,timeout){
        //to show the alarms creating different records
        const main_span=document.createElement("span");
        const span=document.createElement("span");
        const button=document.createElement("button");
        button.id="stop";
        const text=document.createTextNode(`Alarm at ${time}`);
        const btn_text=document.createTextNode(`Cancel`);
        span.appendChild(text);
        button.appendChild(btn_text);
        main_span.appendChild(span);
        main_span.appendChild(button);
        alarm_records.appendChild(main_span);

        main_span.style.border="solid 5px black";
        button.style.marginLeft="5vw";
        span.style.fontSize="xx-large";

        Stop_alarm(button);//to stop the ringing of alarm
        cancel_btn(button,timeout,main_span);//to cancel the alarm

}

function cancel_btn(btn,timeout,container){
    btn.addEventListener("click",()=>{
        clearTimeout(timeout);
        container.remove();//remove the recorded alarms in alarm records
    })
}

function Stop_alarm(btn){

    document.addEventListener('keydown',(e)=>{
        if(e.key=='a'){
            audio.pause();
            audio.currentTime=0;//to make it to start the audio from the start
            btn.click();
        }
    });
}