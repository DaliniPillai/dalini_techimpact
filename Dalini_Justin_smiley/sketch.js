function setup() {
  createCanvas(500,500)
  background(51);
}

function draw() {
  //Head
  ellipseMode(CENTER);
  fill(255,204,0);
  ellipse(250.250,250,250);
  //left eye
  fill(51);
  ellipse(200,200,40,40);
  //right eye
  fill(51);
  ellipse(300,200,40,40);
  //smile
  fill(255, 0, 0);
  arc(250, 300, 80, 80, 0, PI+QUARTER_PI, CHORD);
  //left pupil
  fill(255,255,255);
  ellipse(200,200,35,35);
  //right pupil
  fill(255,255,255);
  ellipse(300,200,35,35)
  
  //Dalini did the writing 
  //Justin did the driving
}