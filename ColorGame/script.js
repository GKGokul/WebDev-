// var game={};

// game.init=function(){
//     ModeButtonListeners();
//     SetupSquare();
//     resetfunc();    
// }

// Do like this for all the variables and functions.
// and then Call only
// game.init();

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var rgbValue = document.querySelector("h1 span");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // Mode buttons event listeners
    ModeButtonListeners();
    SetupSquare();
    resetfunc();
}

function ModeButtonListeners(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent == "Easy")
                numSquares = 3;
            else
                numSquares = 6;
            resetfunc();
        });
    }
}

function SetupSquare(){
    for (var i = 0; i < squares.length; i++) {
        // Add click listeners to the squares
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "CORRECT!";
                changeColors(pickedColor);
                h1.style.background = clickedColor;
                reset.textContent = "Play Again?"
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function resetfunc() {
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();
    rgbValue.textContent = pickedColor;

    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
} 

reset.addEventListener("click", function () {
    resetfunc();
});

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}