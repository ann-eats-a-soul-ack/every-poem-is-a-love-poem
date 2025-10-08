/* globals loadStrings loadSound log radians rotateY texture mouseIsPressed copyTouch handleStart handleMove bg touches createVideo bgLoad cursor loadImage createImage image createGraphics pixelDensity Hammer myHammer handlePan myElement myOptions cursor rectMode rect p5 showGlossary createCanvas windowWidth windowHeight height mouseX mouseY textFont random width background fill textSize textAlign LEFT RIGHT CENTER text mouseIsPressed createButton */

//variables
var y = [];
var x = [];
var aLines;
var pLines;
var button;
let pos = 100;
var blur;
var R, G, B;
var restartText;

function preload() {
  foodLines = loadStrings("anita.txt");
  moreLines = loadStrings("panda.txt");
}

function setup() {
createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  blur = createGraphics(windowWidth, windowHeight);
  blur.clear();
  // scrollPoem();
  resetPoem();
}

function draw() {
  background(255);
  showResetButton();
  
  fill(255);
  textSize(25);
  text('LEFT 4 SLOW', 10, 400);
  text('RIGHT 4 FAST', width - 170, 400);

  for (var i = 0; i < pLines.length; i++) {
    var shake = 0;
    if (mouseIsPressed) {
      shake = random(-10, 50);
      R = random(100, 255);
      G = random(100, 255);
      B = random(100, 255);
      fill(R, G, B);
    }
    blur.fill(R, G, B, 10);
    blur.textAlign(RIGHT);
    blur.textSize(35);
    blur.textFont("Garamond");
    blur.text(pLines[i], 350 + i + shake, pos + i * 20 + shake);
  }
  for (var i = 0; i < pLines.length; i++) {
    blur.fill(245, 222, 179, 10);
    blur.textAlign(RIGHT);
    blur.textSize(25);
    blur.text(pLines[i], 350, y + i * 20);
  }
  image(blur, 0, 0);

  for (var i = 0; i < aLines.length; i++) {
    y = y - (mouseX / 1500) * 0.1;
    
    textFont("Garamond");
    textAlign(LEFT);
    text(aLines[i], 400 + shake, y + i * 20 + shake);
  }

}

function mouseWheel(event) {
  print(event.delta);
  // move the poem according to the vertical scroll amount
  pos -= event.delta;
  //uncomment to block page scrolling
  return false;
}

function showResetButton() {
  button = createButton("back 2 beginning pls");
  //button.position(width - 250, 160, 65);
  button.position(10, 100);

  button.style("background-color", "transparent");
  button.style("color", "rgb(255, 255, 255)");
  button.style("font-size", "30pt");

  button.style("border", "1px solid #326464");
  button.style("border-radius", "5px");
  button.mousePressed(resetPoem);
}

function resetPoem() {
  y = 0;
}
