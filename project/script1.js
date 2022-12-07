let NUM_OF_PARTICLES = 10;
  let particles = [];
  
  function setup() {
     
    createCanvas(windowWidth, windowHeight);

    function showImg(obj) {
        var files = obj.files
        // document.getElementById("imgContainer").innerHTML = getImgsByUrl(files)
        getImgsByFileReader(document.getElementById("imgContainer"), files)
    }
    
    function getImgsByUrl(files) {
        var elements = ''
        for (var i = 0; i < files.length; i++) {
            var url = window.URL.createObjectURL(files[i])
            elements += "<img src='"+ url + "' style='width: 400px; height: 400px; vertical-align: middle; margin-right: 5px;' />"
        }
        return elements
    }
    
    function getImgsByFileReader(el, files) {
        for (var i = 0; i < files.length; i++) {
            let img = document.createElement('img')
            img.setAttribute('style', 'width: 250px; height: 250px; vertical-align: middle; margin-right: 10px;')
            el.appendChild(img)
            var reader = new FileReader()
            reader.onload = function(e) {
                img.src = e.target.result
            }
            reader.readAsDataURL(files[i]) 
        }
    }
    
  
   
  }
  
  
  
  function draw() {
  background(255); 
    
 
    
     for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.move();
      p.display();
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
      this.xSpd = random(-0.1, 0.1);
      this.ySpd = random(-0.1, 0.1);
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
     noStroke();
     fill(201,245,255)
    ellipse(this.x, this.y, 70, 50);
    ellipse(this.x + 10, this.y + 10, 70, 50);
    ellipse(this.x - 20, this.y + 10, 70, 50);
      
      pop();
    }
  }
  
  
  
  
  
  function showImg(obj) {
      var files = obj.files
      // document.getElementById("imgContainer").innerHTML = getImgsByUrl(files)
      getImgsByFileReader(document.getElementById("imgContainer"), files)
  }
  
  function getImgsByUrl(files) {
      var elements = ''
      for (var i = 0; i < files.length; i++) {
          var url = window.URL.createObjectURL(files[i])
          elements += "<img src='"+ url + "' style='width: 400px; height: 400px; vertical-align: middle; margin-right: 5px;' />"
      }
      return elements
  }
 
  function getImgsByFileReader(el, files) {
      for (var i = 0; i < files.length; i++) {
          let img = document.createElement('img')
          img.setAttribute('style', 'width: 250px; height: 250px; vertical-align: middle; margin-right: 10px;')
          el.appendChild(img)
          var reader = new FileReader()
          reader.onload = function(e) {
              img.src = e.target.result
          }
          reader.readAsDataURL(files[i]) 
      }
  }


  