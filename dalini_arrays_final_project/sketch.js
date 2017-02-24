//define array of shapes
var shapes = ["rect","ellipse","triangle"];

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0,0,0);
  fill(random(255,0),210,100);
  var shapeObjs = [rect(40, 120, 120, 40), ellipse(240, 240, 240, 80), triangle(300,100,320,100,310,80)];

//using for loop to iterate over list of values  
  for (var i = 0; i < shapes.length; i++) {
    
    //printing index of value to console
    print("We are printing " + shapes[i] + " from p5.js.");
    shapeObjs[i];
  }
}