function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(255);

  fill(20);
  ellipse(300, 220, 260, 300); 
  rect(190, 220, 220, 200);   

  fill(255, 224, 189);
  ellipse(300, 200, 160, 200);

  fill(255);
  ellipse(260, 180, 50, 35);
  ellipse(340, 180, 50, 35);

  fill(0);
  ellipse(260, 185, 20, 20);
  ellipse(340, 185, 20, 20);

  fill(255);
  ellipse(255, 180, 6, 6);
  ellipse(335, 180, 6, 6);

  stroke(180, 120, 90);
  line(300, 185, 300, 210);
  line(300, 210, 295, 215);
  noStroke();

  fill(255, 150, 150, 150);
  ellipse(245, 210, 20, 12);
  ellipse(355, 210, 20, 12);

  fill(0);
  arc(300, 240, 60, 35, 0, PI, CHORD);
  fill(220, 60, 80);
  arc(300, 240, 60, 20, 0, PI, CHORD);

  fill(255, 224, 189);
  rect(275, 280, 50, 40, 10);

  fill(120);
  rect(220, 310, 160, 120, 40); 
  arc(300, 310, 160, 60, 0, PI, CHORD); 
}
