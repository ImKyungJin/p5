function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(240);
  noStroke();
  fill(238, 235, 205);
  ellipse(320, 230, 300, 260);
  fill(237, 241, 170, 220);
  rect(40, 70, 120, 55);
  fill(244, 191, 255, 220);
  rect(40, 150, 100, 130);
  fill(170, 130, 125, 230);
  rect(40, 290, 130, 100);
  fill(150, 110, 150, 180);
  rect(360, 85, 55, 110);
  fill(110, 80, 130, 130);
  rect(380, 80, 55, 120);
  fill(255, 80, 70, 220);
  ellipse(170, 120, 110, 110);
  fill(160, 140, 110, 210);
  ellipse(260, 60, 95, 95);
  fill(90, 130, 60, 230);
  ellipse(310, 120, 100, 100);
  fill(90, 210, 255, 230);
  ellipse(500, 140, 110, 110);
  fill(245, 185, 215, 210);
  ellipse(500, 240, 75, 75);
  fill(215, 243, 150, 230);
  ellipse(460, 310, 75, 75);
  fill(170, 60, 50, 230);
  ellipse(330, 260, 55, 55);
  fill(120, 200, 180, 220);
  beginShape();
  vertex(100, 80);
  vertex(210, 170);
  vertex(260, 320);
  endShape(CLOSE);
  fill(245, 240, 120, 230);
  beginShape();
  vertex(310, 120);
  vertex(340, 350);
  vertex(330, 80);
  endShape(CLOSE);
  fill(150, 130, 255, 210);
  beginShape();
  vertex(440, 40);
  vertex(580, 30);
  vertex(550, 60);
  endShape(CLOSE);

  stroke(0);
  strokeWeight(2);
  line(60, 130, 560, 115);   
  line(50, 175, 380, 190);   
  line(50, 215, 350, 215);   
  line(10, 330, 560, 250);  
  line(530, 180, 500, 350);  
  line(300, 255, 580, 20);   
  line(290, 145, 580, 130);  
}
