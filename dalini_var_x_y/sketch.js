var circleX = 50; //set up global variables 
var circleY= 300;
var circleW = 95;
var circleH = 95;
var r = 0;
var g = 0;
var b = 255;
var fr,b,b = 50;

function setup() {
  createCanvas(600, 480);
  
}

function draw() {
  //background
  background(r, g, b);
  //ellipse
  noStroke();
  fill(r, 0, 255);
  ellipse(circleX, circleY, circleW, circleH); //used global variables
  
  circleW = circleW +2; //increased the width and height by adding 2 to both 
  circleH = circleH +2;
  
  
  
}