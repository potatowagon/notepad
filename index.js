var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";

var menu = document.getElementById("menu");
menu.style.position = "absolute";

var red = document.getElementById("red");
red.style.backgroundColor = "red";
var green = document.getElementById("green");
green.style.backgroundColor = "green";
var blue = document.getElementById("blue");
blue.style.backgroundColor = "blue";
var black = document.getElementById("black");
black.style.backgroundColor = "black";

var PEN_COLOUR = 'black'

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const context = canvas.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
canvas.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = PEN_COLOUR;
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

function changeColour(id) {
  PEN_COLOUR = id;
}

function clean() {
  console.log("c");
  context.clearRect(0, 0, canvas.width, canvas.height);
}
