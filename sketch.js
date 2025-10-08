/* globals loadStrings loadSound log length radians rotateY texture mouseIsPressed copyTouch handleStart handleMove bg touches createVideo bgLoad cursor loadImage createImage image createGraphics pixelDensity Hammer myHammer handlePan myElement myOptions cursor rectMode rect p5 showGlossary createCanvas windowWidth windowHeight height mouseX mouseY textFont random width background fill textSize textAlign LEFT RIGHT CENTER text mouseIsPressed createButton */

//variables
var y = [];
var x = [];
var aLines;
var pLines;
let pos = 100;
var R, G, B;
let bg;

function preload() {
  aLines = loadStrings("anita.txt");
  pLines = loadStrings("panda.txt");
  bg = loadImage("cloudy.jpg");
}

function setup() {
createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
 background(bg);
  cursor('pinkheart_busy.ani');

  fill(255);
  textSize(25);
  text('every poem is a love poem', width / 2, 50);

  for (var i = 0; i < aLines.length; i++) {
    y = y - (mouseX / 1500) * 0.1;
    
    textFont("Garamond");
    textAlign(LEFT);
    text(aLines[i], 100, pos + i * 20);
  }

    for (var i = 0; i < pLines.length; i++) {
    y = y - (mouseX / 1500) * 0.1;
    
    textFont("Garamond");
    textAlign(RIGHT);
    text(pLines[i], 1300, pos + i * 20);
  }
}

function mouseWheel(event) {
  print(event.delta);
  // move the poem according to the vertical scroll amount
  pos -= event.delta;
  //uncomment to block page scrolling
  return false;
}
