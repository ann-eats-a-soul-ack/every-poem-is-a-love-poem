/* globals loadStrings loadSound log radians rotateY texture mouseIsPressed copyTouch handleStart handleMove bg touches createVideo bgLoad cursor loadImage createImage image createGraphics pixelDensity Hammer myHammer handlePan myElement myOptions cursor rectMode rect p5 showGlossary createCanvas windowWidth windowHeight height mouseX mouseY textFont random width background fill textSize textAlign LEFT RIGHT CENTER text mouseIsPressed createButton */

//variables
var y = [];
var x = [];
var aLines;
var pLines;
var words = [];
var button;
let pos = 100;
var blur;
var R, G, B;
var restartText;
let c1,c2;

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
  
 c1 = color(255);
  c2 = color(30, 0, 255);
}

function draw() {
//  background(255);
  showResetButton();


    for (var w = words.length - 1; w >= 0; w--) {
    words[w].display();
    words[w].move();
    //  if (words[w].isOffScreen()) {
    // words.splice(w, 1);
    //  }
  }
    for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }  
  
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

function makeWord() {
  words.push(new Word());
  console.log(words.length);
}

class Word {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.speed = 1;
    this.l = random(poemWords);
  }

  move() {
    this.y += this.speed;
  }
  display() {
    fill(100, 20, 50);
    text(this.l, this.x, this.y);
  }
  isOffScreen() {
    if (this.y > height) {
      return true;
    }
  }
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
