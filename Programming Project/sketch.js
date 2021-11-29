// draw a spinning box
// with width, height and depth of 50
let font;

  function preload() {
  font = loadFont('inconsolata.otf');
}

function setup() {
  createCanvas(500, 700, WEBGL);
    stroke(0);
  fill(255, 104, 204);
}

function draw() {
  background('#fac');
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(200);
  fill("aqua");  
  strokeWeight (3);
  textAlign(CENTER);
  

textSize(12);
textFont(font);
text('Georgia', 12, 30);
// textFont('Helvetica');
text('Helvetica', 12, 60);
text("michael",mouseX,mouseY,150,100);
  
 let inString = "hello";



  
  //   if (mouseIsPressed) {
  //   ellipse('Georgia');
  // } else {
  //   rect('Helvetica');
  // }

  print(mouseIsPressed);
  }


  