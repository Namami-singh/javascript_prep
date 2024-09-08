const body=document.body;
const allcolors=document.querySelectorAll("span");

allcolors.forEach((element)=>{
  
    element.addEventListener("click",(e)=>{
        // console.log(e);//the click event object
        // console.log(e.target);//span  element
        body.style.backgroundColor=e.target.id
    })
})


/***************Extras******************/
/*button and color changing feature*/


const dancebutton=document.querySelector("button");
const gif=document.querySelector("img");


dancebutton.addEventListener("click",(e)=>{

    const cat_gif=setInterval(function(){setRandomPosition()} ,200);//for assigning the cat random positions in the screen 
    
    const blink= setInterval(function(){Bg_blink()} ,5);//we call the blink() again and again in short duration to make it look
                                                        //like blinking

    document.addEventListener("keydown",(e)=>{
        if(e.key=='a'){
            // to stop the dance party
            gif.style.display="none";
            clearInterval(blink);
            clearInterval(cat_gif);
        }
    })

})


function setRandomPosition() {
    gif.style.display="inline";
    min=0;
    max=80;
    let randomTopPercent = Math.floor(Math.random()*(max-min+1)+min);
    let randomLeftPercent =Math.floor(Math.random()*(max-min+1)+min);
    let top=randomTopPercent.toString();
    let left=randomLeftPercent.toString();
    top="-"+top+"vh";
    left=left+"vw"; 
    gif.style.top=top;
    gif.style.left=left;
  }


  function Bg_blink(){
    let colorindex=Math.floor(Math.random()*4);//to randomly select colors from the allcolors Nodelist
    allcolors[colorindex].click();
  }