var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display"); 
var gameOver = false;
var max;
var numInput = document.querySelector("input");
var winScore = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function () {
    if(!gameOver){
        p1Score++;
        if(p1Score===max){
            gameOver=true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent=p1Score;
    }
});

p2Button.addEventListener("click", function () {
    if(!gameOver){
        p2Score++;
        if(p2Score===max){
            gameOver=true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent=p2Score;        
    }
});

resetButton.addEventListener("click",function(){
    reset();
});

function reset(){
    p1Score=p2Score=0;
    p1Display.textContent=p1Score;        
    p2Display.textContent=p2Score; 
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false;    
}

numInput.addEventListener("change",function(){
    max = Number(this.value);
    winScore.textContent = max;
    reset();
});