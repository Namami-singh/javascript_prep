const body=document.body;
const allcolors=document.querySelectorAll("span");

allcolors.forEach((element)=>{
  
    element.addEventListener("click",(e)=>{
        // console.log(e);//the click event object
        // console.log(e.target);//span  element
        body.style.backgroundColor=e.target.id
    })
})

