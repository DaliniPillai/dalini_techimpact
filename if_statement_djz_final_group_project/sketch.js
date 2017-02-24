//typer:Dalini, driver:Zahra, Justin 
var i= 2; //Setting up if statement 
var mouseX = 250; // mouseX movement
var mouseY = 240; // mouseY movement

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  
  fill(255,0,0) //change color to red
  
  if(i==2) { // our if statement , i was given the value 2 so it could excuite the ellipse
  ellipse(mouseX, mouseY, 100, 100);
  }
  
}