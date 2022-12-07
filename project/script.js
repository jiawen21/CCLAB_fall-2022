// here is my p5
let NUM_OF_PARTICLES = 300;
let particles = [];

function setup() {
   
  createCanvas(1700, 1700);
  

 
}



function draw() {
background(1,0, mouseY); 
  
  if (keyIsPressed && key=="b") {
  background(255); 
}

  
  
   for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();
  }
  
   // limit
  while (particles.length > NUM_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first "oldest" object.
  }
 
  
}



function mousePressed() {
  // generate
  particles.push(new Particle(mouseX, mouseY));  
}

class Particle {
  constructor(x, y) {
    // properties
    this.x = x;
    this.y = y;
    this.xSpd = random(-0.1, 0.3);
    this.ySpd = random(-0.1, 0.3);
    this.dia = random(5, 15);
  }
  // methods
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    translate(this.x, this.y);
    
    fill(255,255,0);
    circle(0, 0, this.dia);
    
    pop();
  }
}