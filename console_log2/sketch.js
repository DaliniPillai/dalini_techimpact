function setup() {
  createCanvas(600, 400);
  background(51);
  console.log("hi")
  //we placed console.log in the function setup to see what would happen,
  //it appeared once because function setup happens once.
  

}

function draw() {
 //If we were to place the console.log into the function draw()it would loop.
  fill('rgb(100%,0%,10%)');
  ellipse(300, 225, 200, 200);
  fill(300, 304, 100);
  rect(135, 100, 60, 60);
  fill(225, 204, 100);
  rect(122, 300, 60, 60);
  fill(225, 204, 100);
  rect(400, 300, 60, 60);
  fill(225, 204, 100);
  rect(300, 50, 60, 60);
  fill(0, 0, 225);


}