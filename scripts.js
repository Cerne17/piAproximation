var canvas = document.getElementById("myCanvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var ctx = canvas.getContext("2d");


var radius = canvas.width/2;
var pixelInSquare = 0;
var pixelInCircle = 0;

function randomNumber (){
    return Math.floor(Math.random() * canvas.width+1);
}

function drawPixel () {
    let xpos = randomNumber();
    let ypos = randomNumber();
    ctx.beginPath();
    ctx.arc(xpos, ypos, 1, 0, 2*Math.PI);
    
    let xcalc = xpos -radius;
    let ycalc = ypos -radius;
    let inCircle = Math.pow((xcalc*xcalc + ycalc*ycalc), 1/2);

    if (inCircle <= radius){
        pixelInCircle++;
        ctx.strokeStyle = "#008000";
        ctx.stroke();
    }else{
        ctx.strokeStyle = "#FF0000";
        ctx.stroke();
    }
    pixelInSquare++;
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(radius,radius,radius,0,2*Math.PI);
    ctx.strokeStyle = "#FFF";
    ctx.stroke();
}

drawCircle();


for (i=0;i<123456;i++) {
    drawPixel();
    let pie = 4 * (pixelInCircle / pixelInSquare);
    console.log(pie);
    }

// function startFunction() {
    
// }

// let startButton = document.getElementById("start");
// startButton.addEventListener("onClick", startFunction());
