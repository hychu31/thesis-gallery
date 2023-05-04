let x, y, rectWidth, rectHeight;
let dx, dy;
let imageScalar;
let imagePath, id;
let angle;
let rotAngle = 1;
let myFont1;
let myFont2;
let myFont3;
let postersImg = [];
let posters = [];

let nPosters = 53;

let img;
let offset = 0;
let easing = 0.05;

function preload() {
  for(var i = 0; i < nPosters; i++){
  	postersImg[i] = loadImage("flowers_BG/"+i+".png");
  }
 img = loadImage('bgtext1.png');

  myFont1 = loadFont('georgia.ttf');
  // myFont2 = loadFont('georgiai.ttf');
  myFont2 = loadFont('Gill Sans Light.otf')
  myFont3 = loadFont('Gill Sans Medium.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < nPosters; i++){
    var poster = new Poster(i,postersImg[i]);
    posters.push(poster);
  }



}

function draw() {
  background(0);
  noCursor();
  push();
        noFill();
        stroke(255,255,255);
        strokeWeight(0.5);
        rectMode(CENTER);
        rect(windowWidth/2, windowHeight/2+25, 110, 30, 30);
  pop();

  	if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2+30) < 50) {
      push();
        noStroke();
        fill(255,255,255);
        rectMode(CENTER);
        rect(windowWidth/2, windowHeight/2+25, 110, 30, 30);
      pop();

      push();
        fill(0,0,0);
        textFont(myFont3);
        textAlign(CENTER);
        textSize(15);
        textLeading(1);
        text("Go To Test", windowWidth/2,windowHeight/2+30);
      pop();
    }        else {
      push();
        fill(255,255,255);
        textFont(myFont2);
        textAlign(CENTER);
        textSize(15);
        textLeading(1);
        text("Go To Test", windowWidth/2,windowHeight/2+30);
      pop();
      }


  push();
  fill(255,255,255);
   textFont(myFont1);
   textSize(250);
   // textLeading(50);

  textAlign(CENTER, CENTER);
  textLeading(5);
   text('INNER', windowWidth/2, 15);
   text('NATURE', windowWidth/2, windowHeight-60)
   pop();

   push();
  fill(255,255,255,210);
  textFont(myFont1);
   textSize(16);
   textLeading(10);
   textAlign(CENTER, CENTER);
   text('A Self-Reflective Personality Test for Introverts',windowWidth/2, windowHeight/2-45);
   text('To Encourage Acceptance of Differences',windowWidth/2, windowHeight/2-20);
   pop();


// push();
// noStroke();
// fill(255,255,255);
// textFont(myFont2);
// textAlign(CENTER);
// textSize(15);
// textLeading(1);
// text("Go To Test", windowWidth/2,windowHeight/2+30);
// pop();

 //   push();
 //     var scale = 0.16;
 //     let dx = mouseX - img.width / 2 - offset;
 // offset += dx * easing;
 // tint(255, 180); // Display at half opacity
 //     imageMode(CENTER);
 //     blendMode(DIFFERENCE);
 //     image(img, windowWidth/2, windowHeight/2, scale*width, scale*img.height*width/img.width)
 //   pop();

  for(var i = 0; i < nPosters; i++){
    posters[i].draw();
    posters[i].move();
  }
	if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2+30) < 50) {
    push();
    noStroke();
    fill(0,0,0);
    ellipse(mouseX, mouseY, 10,10)
    pop();
  } else {
    push();
    noStroke();
    fill(255,255,255);
    ellipse(mouseX, mouseY, 10,10)
    pop();
  }
}

class Poster {
  constructor(myId,posterImg){
    imageScalar = .20;

    this.rectWidth = posterImg.width * imageScalar;
    this.rectHeight = posterImg.height * imageScalar;

    this.x = random(this.rectWidth,width-this.rectWidth);
    this.y = random(this.rectHeight,height-this.rectHeight);

    this.dx = random(0.25, 4);
    this.dy = random(0.25, 4);

    this.imagePath = posterImg;


    this.id = myId;

  }

  move(){
   // move the ball
    this.x += this.dx;
    this.y += this.dy;

    // check for bounce
    if (this.x + this.rectWidth >= width || this.x <= 0) {
      this.dx = -1 * this.dx;



    }
    if (this.y + this.rectHeight >= height || this.y <= 0) {
      this.dy = -1 * this.dy;


    }

  }

  draw(){

      push();
      translate(this.x,this.y);
      rotate(this.angle);
      image(this.imagePath,0,0,this.rectWidth, this.rectHeight);
      pop();
  }
}

function mousePressed() {
	if (dist(mouseX, mouseY, windowWidth/2, windowHeight/2+30) < 100) {
			window.open("http://localhost:8888/Thesis%20Test/");
      // push();
      //   fill(255,255,255);
      //   noStroke();
      //   rectMode(CENTER);
      //   rect(windowWidth/2, windowHeight/2+25, 125, 30, 30);
      // pop();
      //
      // push();
      //   fill(0,0,0);
      //   textFont(myFont2);
      //   textAlign(CENTER);
      //   textSize(15);
      //   textLeading(1);
      //   text("Try Test Here", windowWidth/2,windowHeight/2+30);
      // pop();

		}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


// let lapse = 0;    // mouse timer
// function keyPressed(){
//   if (millis() - lapse > 400){
//   bg = "";
//    save("Gallery" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".png");
//     lapse = millis();
//   }
// }
