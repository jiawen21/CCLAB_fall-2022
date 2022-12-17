function setup() {
    createCanvas(1500, 950);
    background(0);
  }
  function draw() {

     if (keyIsPressed && key=="a") {
      stroke(11,107,49);
      strokeWeight(6);
      line(pmouseX, pmouseY, mouseX, mouseY);  
    }
   
   if (keyIsPressed && key=="b") {
      stroke(255,100,120);
      strokeWeight(6);
      line(pmouseX, pmouseY, mouseX, mouseY);  
    }
    
    if (keyIsPressed && key=="c") {
      fill(204,102,0);
      noStroke()
      ellipse(pmouseX,pmouseY,20,20);}
    
     if (keyIsPressed && key=="d") {
      stroke(102,178,255);
      strokeWeight(6);
      line(pmouseX, pmouseY, mouseX, mouseY);  
    }
    
    if (keyIsPressed && key=="e") { 
        stroke(248,255,1);
         strokeWeight(6);
         line(pmouseX, pmouseY, mouseX, mouseY); 
       }

       push()
       fill((255), mouseX);
       textSize(30);
       text('Draw a Christmas Tree', 40, 80)
       pop()
   
       push()
       fill(255, mouseX);
       textSize(25);
         text('GREEN-press mouse and key a', 40, 110)
         text('RED-press mouse and key b', 40, 140)
         text('ORANGE-press mouse and key c', 40, 170)
         text('BLUE-press mouse and key d', 40, 200)
         text('YELLOW-press mouse and key e', 40, 230)
         pop()
  
    }