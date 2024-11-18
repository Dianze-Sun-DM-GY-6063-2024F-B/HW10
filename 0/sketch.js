let song; 
let fft; 
let r=0;

let numRects1 = 20, baseRadius1 = 50, sizeFactor1 = 5, freqRange1 = [342, 620];

let numRects2 = 30, baseRadius2 = 190, sizeFactor2 = 8, freqRange2 = [90, 350];

let numRects3 = 70, baseRadius3 = 400, sizeFactor3 = 10, freqRange3 = [0, 90];

function preload() {
  song = loadSound('Jcole instrumental.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  fft = new p5.FFT(); 
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES); 
 
} 

function draw() {
  background(0); 

  translate(width / 2, height / 2); 

  let spectrum = fft.analyze(); 
r+=0.5


  push();
  rotate(r);
  drawLowFreqCircle(spectrum);
 
  pop();
  push();
  rotate(2*r);
  drawMidFreqCircle(spectrum);
  
  pop();

  push();
  rotate(r/2);
  drawHighFreqCircle(spectrum);
  pop();
}

function drawHighFreqCircle(spectrum) {
  for (let i = 0; i < numRects3; i++) {
    let angle = map(i, 0, numRects3, 0, 360);
    let freqIndex = int(map(i, 0, numRects3, freqRange3[0], freqRange3[1]));
    let amp = spectrum[freqIndex] || 0;
    let dist = baseRadius3 ;
    let recth = map(amp, 0, 200, 0, 500);
    let color =map(amp, 0, 255, 10, 80);
    let x = dist * cos(angle);
    let y = dist * sin(angle);

    push();
    translate(x, y);
    rotate(-r+angle);
    fill(color);
    rect(0, 0, 600 + recth, 15 / 4);
    pop();
  }
}

function drawLowFreqCircle(spectrum) {
  for (let i = 0; i < numRects1; i++) {
    let angle = map(i, 0, numRects1, 0, 360);
    let freqIndex = int(map(i, 0, numRects1, freqRange1[0], freqRange1[1]));
    let amp = spectrum[freqIndex] || 0; 
    let dist = baseRadius1 + map(amp, 0, 255, 0, 400); 
    let recth = map(amp, 0, 255, 0, 20);
    let color =map(amp, 0, 50, 50, 255);
    let x = dist * cos(angle);
    let y = dist * sin(angle);

    push();
    translate(x, y);
    rotate(angle);
    fill(color);
    rect(0, 0,  5 + recth, 15 / 4);
    pop();
  }
}

function drawMidFreqCircle(spectrum) {
  for (let i = 0; i < numRects2; i++) {
    let angle = map(i, 0, numRects2, 0, 360);
    let freqIndex = int(map(i, 0, numRects2, freqRange2[0], freqRange2[1]));
    let amp = spectrum[freqIndex] || 0;
    let dist = baseRadius2 + map(amp, 0, 255, 0, 800);
    let recth = map(amp, 0, 255, 60, 100);
    let color =map(amp, 0, 200, 20, 255);
    let x = dist * cos(angle);
    let y = dist * sin(angle);

    push();
    translate(x, y);
    rotate(angle);
    fill(color);
    rect(0, 0, 15 + recth, 15 / 4);
    pop();
  }
}



function mousePressed() {
  if (song.isPlaying()) {
    song.pause(); 
  } else {
    song.play(); 
  }
}
