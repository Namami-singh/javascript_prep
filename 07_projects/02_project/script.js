const form=document.querySelector("form");
let result=document.getElementById("result");


form.addEventListener("submit",(event)=>{
    
    event.preventDefault();

    let height=document.getElementById("Height").value;
    let weight=document.getElementById("Weight").value;

    if( height ==="" || height<=0 || isNaN(height)){
        result.innerText="Please Provide correct height";
    }
    else if( weight ==="" || weight<=0 || isNaN(weight)){
        result.innerText="Please Provide correct Weight";
    }
    else{
        let total=(weight/(height*height)).toFixed(1);
        result.innerText=total;
        category(total);
    }

})
 
 
function category_result(text_to_update)
{
    let para=document.createElement("p");
    let text=document.createTextNode(text_to_update);
    para.appendChild(text);
    result.appendChild(para);
}


function category(total){

    if(total<18.5){
        category_result("You are underweight");
    }
    else if(total>=18.5&&total<=24.9){
        category_result("You are normal weight");
    }
    else if(total>=25&&total<=29.9){
        category_result("You are overweight");
    }
    else if(total>=30&&total<=39.9){
        category_result("You are Obese");
    }
    else
    {
        category_result("You are severly Obese");
    }
}