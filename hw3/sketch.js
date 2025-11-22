function setup() {
  createCanvas(600, 400);
  cloth = color(130);
}

let px = 300;
let py = 200;
let eMove = 0;
let mSize = 0;
let isBlink = false;
let cloth;
let starAlpha = 255;
let showStar = false;

function draw() {
  let bg = 220 + (mouseX / width) * 30;
  background(bg, 245, 255);

  if (mouseY < height / 3) {
    mSize = 20;
  } else if (mouseY > (2 * height) / 3) {
    mSize = -10;
  } else {
    mSize = 0;
  }

  fill(30);
  ellipse(px, py + 25, 250, 290);
  rect(px - 100, py + 30, 200, 190, 50);

  fill(255, 225, 190);
  ellipse(px, py, 160, 200);

  if (!isBlink) {
    fill(255);
    ellipse(px - 40, py - 20, 48, 32);
    ellipse(px + 40, py - 20, 48, 32);

    fill(0);
    ellipse(px - 40 + eMove, py - 15, 18, 18);
    ellipse(px + 40 + eMove, py - 15, 18, 18);

    fill(255);
    ellipse(px - 45 + eMove, py - 22, 6, 6);
    ellipse(px + 35 + eMove, py - 22, 6, 6);
  } else {
    fill(0);
    rect(px - 65, py - 20, 50, 3, 10);
    rect(px + 15, py - 20, 50, 3, 10);
  }

  stroke(180, 120, 90);
  line(px, py - 10, px, py + 12);
  line(px, py + 12, px - 5, py + 16);
  noStroke();

  fill(255, 160, 160, 140);
  ellipse(px - 55, py + 10, 20, 12);
  ellipse(px + 55, py + 10, 20, 12);

  fill(0);
  arc(px, py + 40, 60, 35 + mSize, 0, PI, CHORD);
  fill(230, 60, 90);
  arc(px, py + 40, 60, 20 + mSize, 0, PI, CHORD);

  fill(255, 225, 190);
  rect(px - 20, py + 80, 40, 40, 10);

  fill(cloth);
  rect(px - 75, py + 110, 150, 100, 40);
  arc(px, py + 110, 150, 50, 0, PI, CHORD);

  if (showStar) {
    drawStar(px, py - 130, 5, 15, 8, starAlpha);
    starAlpha -= 10;
    if (starAlpha <= 0) {
      starAlpha = 255;
      showStar = false;
    }
  }

  if (frameCount % int(random(80, 150)) === 0) {
    isBlink = !isBlink;
  }
}

function keyPressed() {
  if (key === ' ') {
    showStar = true;
    cloth = color(random(100, 255), random(100, 255), random(100, 255));
  }
  if (keyCode === ENTER) {
    saveGif('character_motion', 10);
  }
}

function mouseMoved() {
  eMove = (mouseX / width) * 10 - 5;
}


function drawStar(x, y, n, r1, r2, a) {
  let step = TWO_PI / n;
  let half = step / 2;
  fill(255, 215, 0, a);
  noStroke();
  beginShape();
  for (let ang = 0; ang < TWO_PI; ang += step) {
    let sx = x + cos(ang) * r2;
    let sy = y + sin(ang) * r2;
    vertex(sx, sy);
    sx = x + cos(ang + half) * r1;
    sy = y + sin(ang + half) * r1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
