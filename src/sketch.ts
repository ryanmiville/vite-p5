let angle = 0.0;

function setup() {
  createCanvas(960, 1080);
  rectMode(CENTER);
  stroke(0, 15, 30);
  strokeWeight(25);
}

function draw() {
  background(0, 15, 30);
  translate(width / 2, height / 2);
  for (let n = 0; n < 100; n++) {
    fill(n * 10, 255 - n * 25, 255 - n * 10);
    scale(0.95);
    rotate(radians(angle));
    rect(0, 0, 600, 600);
  }
  angle += 0.1;
}
