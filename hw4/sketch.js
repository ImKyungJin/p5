let suddenHue1 = 0;
let suddenHue2 = 200;
function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100, 100);
}
function draw() {
  background(240);

  let t = frameCount * 0.02;
  let sizeA = 1 + sin(t) * 0.08;
  let sizeB = 1 + cos(t * 1.3) * 0.12;
  if (frameCount % 80 === 0) {
    suddenHue1 = random(0, 360); 
  }
  if (frameCount % 100 === 0) {
    suddenHue2 = random(0, 360);   
  }
  noStroke();
  fill(40, 20, 95, 60);
  ellipse(320, 230, 300 * sizeA, 260 * sizeA);
  fill(60, 40, 100, 70); rect(40, 70, 120, 55);
  fill(300, 40, 100, 70); rect(40, 150, 100, 130);
  fill(20, 30, 60, 70); rect(40, 290, 130, 100);
  fill(280, 40, 50, 70); rect(360, 85, 55, 110);
  fill(260, 40, 60, 60); rect(380, 80, 55, 120);
  fill(0, 80, 90, 80);
  ellipse(170, 120, 110 * sizeB, 110 * sizeB);
  fill(suddenHue1, 30, 80, 80);
  ellipse(260, 60, 95, 95);
  fill(140, 50, 70, 80);
  ellipse(310, 120, 100, 100);
  fill(suddenHue2, 70, 95, 80);
  ellipse(500, 140, 110, 110);
  fill(330, 40, 100, 70); ellipse(500, 240, 75, 75);
  fill(90, 50, 90, 70); ellipse(460, 310, 75, 75);
  fill(10, 80, 70, 70); ellipse(330, 260, 55, 55);
  fill(180, 40, 90, 70);
  beginShape(); vertex(100,80); vertex(210,170); vertex(260,320); endShape(CLOSE);

  fill(50, 60, 100, 70);
  beginShape(); vertex(310,120); vertex(340,350); vertex(330,80); endShape(CLOSE);

  fill(260, 50, 100, 60);
  beginShape(); vertex(440,40); vertex(580,30); vertex(550,60); endShape(CLOSE);

  stroke(0);
  strokeWeight(2);
  line(60, 130, 560, 115 + sin(t)*3);
  line(290, 145, 580, 130 + cos(t)*3);
  line(50, 175, 380, 190);
  line(50, 215, 350, 215);
  line(10, 330, 560, 250);
  line(530, 180, 500, 350);
  line(300, 255, 580, 20);
}
