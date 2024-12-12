
function changeColor(){
    let you = document.getElementById("first" );
    you.style.backgroundColor="blue";
    you.innerHTML="I know now what the DOM is 💖";
}

let more = document.getElementById("first" );
more.addEventListener ("click",changeColor);

function changeColortwo(){
    let game = document.getElementById("second");
    game.style.backgroundColor="orange";
    game.innerHTML="I know how to acces / select elements in the ❤ DOM";
}


let come = document.getElementById("second");
come.addEventListener ("click",changeColortwo);


function changeColorthree(){
    let made = document.getElementById("third");
    made.style.backgroundColor="indigo";
    made.innerHTML="I know how to style methods to change the style of an element in the DOM ✔";
}

let both = document.getElementById("third");
both.addEventListener ("click",changeColorthree);

function changeColorfour(){
    let walk = document.getElementById("fourth");
    walk.style.backgroundColor=" green";
    walk.innerHTML="I know how the styling properties differ in JS from CSS 👍 ";

}


let take = document.getElementById("fourth");
take.addEventListener("click",changeColorfour);


function changeColorfive(){
    let joy = document.getElementById("fifth");
    joy.style.backgroundColor="black";
    joy.innerHTML="Yes I did it!! I manipulated the DOM and style my elemennt 🌹🌹😃😍 ";
}


let make =document.getElementById("fifth");
make.addEventListener("click",changeColorfive);