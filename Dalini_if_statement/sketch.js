function setup() {
  createCanvas(600,480);

}

function draw() {
  background(145,255,100);
  
  stroke(255);
  strokeWeight(2);
  noFill();
  
  if (mouseX > 300) { //mouseX is used so that when we place our mouse > 300, we will see the color
  //
    fill(255, 0, 0);
  }
  
  ellipse(300, 240, 100, 100);
}