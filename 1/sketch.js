let song; 
let peaks; 
let rotationFactor = 90; 

function preload() {
  song = loadSound('Jcole instrumental.mp3'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noLoop(); 
  peaks = song.getPeaks(width * 5); 
}

function draw() {
  background(0); 
  translate(width / 2, height / 2);
  strokeWeight(2);

  let step = width / peaks.length; 


  for (let i = 0; i < peaks.length; i++) {
    let peak = peaks[i];
    let x = map(i, 0, peaks.length, -width / 2, width / 2); 
    let lineHeight = map(peak, -1, 1, -height / 2, height / 2);
    let gray = map(peak, -1, 1, 0, 255); 

    push();
    translate(x, 0); 
    rotate(peak * 90); 
    stroke(gray); 
    line(0, 0, 0, lineHeight); 
    pop();
  }

  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("J. Cole - Wet Dreamz", 0, -height / 2 + 50);
}
