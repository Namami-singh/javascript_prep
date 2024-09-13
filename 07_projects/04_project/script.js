let random_number=parseInt((Math.random()*100)+1);
console.log(random_number);


const form =document.querySelector("form");
let msg_box=document.getElementById("lowOrHi");
let inputField=document.getElementById("num");
let result_box=document.querySelector(".results");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkValidity(inputField);
});

function checkValidity (){

    let input_value=inputField.value;

    if(isNaN(input_value) || input_value=="")
    {
       display_msg("hey dude Provide a number the game says 'Number guessing game' duh 🤨!!");
    }
    else if(input_value<1 || input_value>100)
    {
        display_msg("Dude come on can't you read it clearly says the number is between 1 and 100 🥱");
    }
    else{
        check_correctness(inputField);
    }
}

function display_msg(msg){
    msg_box.innerText=msg;
    inputField.value="";
}

function check_correctness(){

    let value= inputField.value;
    if(value>random_number){
        display_msg("Hint:Go lower🫳");
    }
    else if(value<random_number){
        display_msg("Hint:Go higher🫴");
    }
    else{
        inputField.value="";
        inputField.setAttribute("disabled","");
        const para=document.createElement("p");
        para.innerHTML="<h2>YOU GOT IT!!!!!</h2>";
        result_box.appendChild(para);
    }
}
