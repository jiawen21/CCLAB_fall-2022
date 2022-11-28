console.log("my script is loaded successfully")


let g=-1;
let h=0;
let gSpeed=10;
let hSpeed=10;

let angle;
let angleVel;
let radDist;
let dia;
angle = 100;
  angleVel = 1; // angular velocity
  radDist = 100; // radial distance
  dia = 50; // diameter

function setup() {
    let canvas = createCanvas(400, 500);
    canvas.parent("myContainer");
    background(0)
    fill(255);
  stroke(200);
  }
  
  function draw() {
    // center line
fill(255,255,255)
line(4, height / 100, width, height / 100);

// sine graph
let freq = frameCount * 0.09;
let amp = 200;
let sinValue = sin(freq) * amp;

let x = frameCount;
let y = height / 2 + sinValue;

ellipse(x, y, 2, 10);

noStroke(10);
fill(255,255,255);
circle(g,h,4)

g=g+gSpeed;
h=h+gSpeed;

if(g>=width){
  console.log("circle is at the right side");
  g=30;
}

if(h>=height){
   h=30; 
}

frameRate(10);

// update the angle
angle = angle + angleVel;


// calculate the position
x = width/2 + cos(angle) * radDist;
y = height/2 + sin(angle) * radDist;

// display the circle
fill(255,255,255)
 
circle(x, y, dia);
  }