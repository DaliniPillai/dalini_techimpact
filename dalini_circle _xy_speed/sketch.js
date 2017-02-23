var circleX = 50;
var circleY= 200;
var circleW = 95;
var circleH = 95;
var r = 100;
var g = 100;
var b = 255;
//background color
var fr=255;
var fg= 100;
var fb= 140;
//changed the name of the variable to var fr,frg,frb because we used r,g,b for backgroun

function setup() {
  createCanvas(600, 480);
  
}

function draw() {
  //background
  background(r, g, b); //corresponds with our global variable var r,g,b
  //ellipse
  noStroke();
  fill(fr,fg,fb);
  ellipse(circleX, circleY, circleW, circleH); // used global variable 
  //changed the direction on the circle to get larger 


  circleX = circleX + 1;

}