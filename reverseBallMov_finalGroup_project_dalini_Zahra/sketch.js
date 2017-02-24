//Typer both: Zahra and Dalini, Driver, Dalini and Zahra
 
 //set global variables
var x = 0;
var w= 70
var y = 300 
var speed = 5;//We set the speed to 5
 
 
function setup() {
  createCanvas(600, 480);
  frameRate(100);
}
 
function draw() {
  background(34,139,34);
  //ellipse
  stroke(125);
  strokeWeight(2);
  fill(0,0,0);
  rect (x, y, w, 60);//rect shape using the global variables 
   
  //if statement for speed. If x greater than width OR X is less than zero it will reverse.
  if (x > width-w || x < 0) { // subtract w from the width in order for it to reverse on the right side 
    speed = speed * -1
    if(y>200 && x< 35);//if both conditions have to be true 

  }
   
 x = x + speed; //assign the value x to speed 
  
}