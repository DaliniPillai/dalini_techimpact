var circle = { //created variable with object 
  x: 0,
  y: 200, 
  diameter: 80
};

//created two additional circles
var circle1 = {
  x:0,
  y:240,
  diameter:80
};

var circle2 = {
  x: 0,
  y: 280,
  diameter: 80
};

//assign rgb colors 
var r = 255;
var g = 160;
var b = 135;

function setup() {
  createCanvas(600, 400);  
  // background using variables
  background(r, g, b);
}

function draw() {
  // construction of the  circles plus movement
  
  //circle 1
  fill(250, 255, 200);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter); //used dot syntax
  circle.x = circle.x + 6; //adding 6 to circle.x, increased the speed
 
  //circle 2
  fill(250,200,200);
  ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
  circle1.x = circle1.x + 6; 
  
  //circle 3
  fill(0,255,200);
  ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
  circle2.x = circle2.x + 6;
}
