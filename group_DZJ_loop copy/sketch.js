function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255,255,0);
  
  var x = 0;
  while (x <= width) {
    fill(0, 0, 255);
    rect(x, 20, 55, 55, 20);
    x = x + 60;
  }
  
  for (x = 0; x <= width; x += 60) { 
    fill(0, 153, 0);
    rect(x, 300, 50, 50);
  }
}