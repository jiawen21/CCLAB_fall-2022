console.log("my script is loaded successfully")

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("myContainer");
    background(255,0,0)
  }
  
  function draw() {
    background(240);
  
  noStroke();
  
 //fill with transparency (4th arguement)
  fill(200,0,10,100);
  rect(200, 200.90,50);
  
  //fill with transparency (4th arguement)
  fill(0,100,255,50);
  ellipse(180,190,90,50)
  }