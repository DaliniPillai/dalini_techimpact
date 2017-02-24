//writer/driver: Dalini and Zahra
function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255,255,0);
  
  var x = 0; //set local variable x to 0
  while (x <= width) { //If the condition is true the while loop will run
    fill(0, 0, 255);
    rect(x, 20, 55, 55, 20);
    x += 60;
  }
  
  for (x = 0; x <= width; x += 60) { //it will loop through the block of code x number of times
    fill(0, 153, 0);
    rect(x, 300, 50, 50);
  }
}