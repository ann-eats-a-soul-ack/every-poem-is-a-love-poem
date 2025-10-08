/* globals loadStrings loadSound log length radians rotateY texture mouseIsPressed copyTouch handleStart handleMove bg touches createVideo bgLoad cursor loadImage createImage image createGraphics pixelDensity Hammer myHammer handlePan myElement myOptions cursor rectMode rect p5 showGlossary createCanvas windowWidth windowHeight height mouseX mouseY textFont random width background fill textSize textAlign LEFT RIGHT CENTER text mouseIsPressed createButton */

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
let bg;

function preload() {
  aLines = loadStrings("anita.txt");
  pLines = loadStrings("panda.txt");
  bg = loadImage("cloudy.jpg");
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
 background(bg);
  showResetButton();
  
  fill(255);
  textSize(25);
  text('LEFT 4 SLOW', 10, 400);
  text('RIGHT 4 FAST', width - 170, 400);

  for (var i = 0; i < aLines.length; i++) {
    y = y - (mouseX / 1500) * 0.1;
    
    textFont("Garamond");
    textAlign(LEFT);
    text(aLines[i], 200 + shake, y + i * 20 + shake);
  }

    for (var i = 0; i < pLines.length; i++) {
    y = y - (mouseX / 1500) * 0.1;
    
    textFont("Garamond");
    textAlign(RIGHT);
    text(pLines[i], 1000 + shake, y + i * 20 + shake);
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
