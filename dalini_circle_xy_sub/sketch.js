var circleX = 480; //global variables 
var circleY= 400;
var circleW = 95;
var circleH = 95;

var r = 0;
var g = 0;
var b = 255;
//background color
var fr=255;
var fg= 30;
var fb= 40;
//changed the name of the variable

function setup() {
  createCanvas(600, 480);
  
}

function draw() {
  //background
  background(r, g, b);
  //ellipse
  noStroke();
  fill(fr,fg,fb);
  ellipse(circleX, circleY, circleW, circleH);

  circleX = circleX - 5;
  circleY = circleY -3;
  circleW = circleW + 3;
  circleH = circleH +3;  
  //canged the direction on the circle to get larger 
}