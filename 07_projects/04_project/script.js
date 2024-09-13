let random_number=parseInt((Math.random()*100)+1);
console.log(random_number);


const form =document.querySelector("form");
const msg_box=document.getElementById("lowOrHi");
const inputField=document.getElementById("num");
const result_box=document.querySelector(".results");
const prev_attempts=document.querySelector(".prev_guess");
const guess_count=document.querySelector(".guess_left");

let guess=10;
let guesses=new Array();
const para=document.createElement("p");
let play=true;


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(play)checkValidity(inputField);
});


function checkValidity (){//to check ki value valid ki nhi

    let input_value=inputField.value;

    if(isNaN(input_value) || input_value=="")
    {
       display_msg("hey dude Provide a number the game says </br> 'Number guessing game' duh 🤨!!");
    }
    else if(input_value<1 || input_value>100)
    {
        display_msg("Dude come on can't you read it clearly says </br> the number is between 1 and 100 🥱");
    }
    else{
        Update_variables();
        check_correctness();
    }
}

function Update_variables(){

    guesses.push(inputField.value);
    prev_attempts.innerText=` ${guesses} `;
    guess--;
    guess_count.innerText=guess;

}

function display_msg(msg){
    msg_box.innerHTML=`<h3>${msg}</h3>`;
    inputField.value="";
}

function check_correctness(){

    let value= inputField.value;

    if(value>random_number){
        display_msg("Hint:Go lower🫳");

        if(guess<=0){//checking here to make sure ki jese hi 0 ho guess we can stop the game ye last attempt me agar 
            //kam jyada hua to bta ke we can directly exit neither correct hua tab bhi we are exiting.
            display_msg(`limit Reached, the target was ${random_number}</br>Try again!!`);
            endGame();
        }
    }

    else if(value<random_number){
        display_msg("Hint:Go higher🫴");

        if(guess<=0){
            display_msg(`limit Reached, the target was ${random_number}</br>Try again!!`);
            endGame();
        }
    }

    else{
        display_msg("YOU GOT IT!!!!!😎");
        endGame();
    }

}

function endGame(){

    inputField.setAttribute("disabled","");
    para.innerHTML=`<h2 id="restart">Restart</h2>`;
    result_box.appendChild(para);
    play=false;//to stop the game as submit pe tab bhi verify krta hai empty string ""
    restart();

}

function restart(){

document.getElementById("restart").addEventListener("click",function (e){//creating eventlistener here as uske pehle para does not even exist
    random_number=parseInt((Math.random()*100)+1);
    console.log(random_number);
    guesses=[];
    prev_attempts.innerText=""; //because vo array empty hone ke baad uss samay show nhi hora
    guess=10;
    inputField.removeAttribute("disabled");
    result_box.removeChild(para);
    display_msg("");
    play=true;
});

}

