const start=document.querySelector('.start');
const stop=document.querySelector('.stop');
const body=document.body;

let interval;
start.addEventListener('click',(e)=>{
    if(!interval)
    {
        interval=setInterval(()=>{
        body.style.backgroundColor=randomColor();
        }, 100);
    }
},false)



function randomColor(){
    let units='0123456789ABCDEF';
    let hexcolor='#';
    for(let i=0 ;i<6;i++){
        hexcolor += units[Math.floor(Math.random()*16)];
    }
    return hexcolor;
}



stop.addEventListener('click',(e)=>{
    if(interval){
        clearInterval(interval);
        interval=null;
    }
},false) 