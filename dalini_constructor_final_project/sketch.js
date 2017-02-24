//declaring array
var fruits = []; 

//setup canvas
function setup() {
  createCanvas(600, 400);
  
  //creating objects from fruit constructor
  for (var i = 0; i < 20; i++) { 
    
    //calling our new fruit constructor
    fruits[i] = new Fruit();
  }
}

function draw() {
  background(0);
  
  //looping through objects to move and display them on canvas
  for (var i = 0; i < fruits.length; i++) {
    fruits[i].move();
    fruits[i].display();
  }
}

//defining our fruit constructor 
function Fruit() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    stroke(255);
    fill(random(0,255),random(0,255),random(0,255)); //added random rgb colors 
    ellipse(this.x, this.y, 24, 24);

  }
//function to move objects
  this.move = function() {
    this.x = this.x + random(-1, 2); 
    this.y = this.y + random(-1, 2);

  }
}

