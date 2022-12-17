// here is my p5

let particles = [];

function setup() {
  createCanvas(2000, 2000);
  background(0);

  for (let i = 0; i < 500; i++) {
    particles[i] = new Particle(random(width), random(-100, 0) );
  }
}

function draw() {
  background(0);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]; // each object
    p.move();
    p.reappear();
    p.display();
  }

}


class Particle {
  constructor(x, y) {
    // properties (variables)
    this.x = x;
    this.y = y;
    this.xSpd = 0;
    this.ySpd = random(0.5, 2.0);
    this.dia = random(3, 10);
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }
  // methods (functions)
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  zigzag() {
    this.x += random(-0.5, 0.5);
  }
  reappear() {
    if (this.x < 0) {
      this.x = width;
    }
    else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      //this.x = height;
    }
    else if (this.y > height) {
      this.y = 0;
    }
  }
  display() {
    push();
    noStroke();
    fill(this.r, this.g, this.b, 100);
    circle(this.x, this.y, this.dia);
    circle(this.x, this.y, this.dia * 0.6);
    circle(this.x, this.y, this.dia * 0.3);
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