let img;
//미리 로딩 준비
function preload() {
  img = loadImage("jeongseo.png");
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  image(img, 0, 0, width, height);
  if (mouseIsPressed === true) {
    console.log(mouseX, mouseY);
  }
  //1
  beginShape();
  fill(202, 174, 160);
  noStroke();
  vertex(571, 345);
  vertex(617, 335);
  vertex(568, 316);
  endShape(CLOSE);

  //2
  beginShape();
  fill(219, 193, 178);
  noStroke();
  vertex(609, 275);
  vertex(617, 335);
  vertex(568, 316);
  endShape(CLOSE);

  //3
  beginShape();
  fill(211, 183, 169);
  noStroke();
  vertex(609, 275);
  vertex(616.5, 335);
  vertex(673, 310);
  endShape(CLOSE);

  //4
  beginShape();
  fill(141, 157, 180);
  noStroke();
  vertex(610, 275);
  vertex(653, 229);
  vertex(673, 310);
  endShape(CLOSE);

  //5
  beginShape();
  fill(223, 196, 189);
  noStroke();
  vertex(609, 275);
  vertex(568, 316);
  vertex(547, 255);
  endShape(CLOSE);

  //6
  beginShape();
  fill(159, 167, 185);
  noStroke();
  vertex(609, 275);
  vertex(591, 209);
  vertex(547, 255);
  endShape(CLOSE);

  //7
  beginShape();
  fill(147, 160, 170);
  noStroke();
  vertex(609.5, 275.5);
  vertex(591, 209);
  vertex(653, 229);
  endShape(CLOSE);

  //8
  beginShape();
  fill(168, 178, 187);
  noStroke();
  vertex(676, 163);
  vertex(591, 209);
  vertex(653, 229);
  endShape(CLOSE);

  // 9
  beginShape();
  fill(165, 175, 195);
  noStroke();
  vertex(676, 163);
  vertex(591, 209);
  vertex(584, 148);
  endShape(CLOSE);

  // 10
  beginShape();
  fill(157, 162, 180);
  noStroke();
  vertex(676, 163);
  vertex(671, 118);
  vertex(582, 148);
  endShape(CLOSE);

  //11
  beginShape();
  fill(134, 143, 152);
  noStroke();
  vertex(676, 163);
  vertex(671, 118);
  vertex(739, 126);
  endShape(CLOSE);

  //12
  beginShape();
  fill(146, 166, 191);
  noStroke();
  vertex(676, 163);
  vertex(758, 229);
  vertex(739, 126);
  endShape(CLOSE);

  //13
  beginShape();
  fill(133, 153, 186);
  noStroke();
  vertex(676, 163);
  vertex(758, 229);
  vertex(653, 229);
  endShape(CLOSE);

  //14
  beginShape();
  fill(125, 146, 175);
  noStroke();
  vertex(653, 229);
  vertex(758, 229);
  vertex(755, 270);
  endShape(CLOSE);

  //15
  beginShape();
  fill(98, 131, 166);
  noStroke();
  vertex(653, 229);
  vertex(696, 271);
  vertex(755, 270);
  endShape(CLOSE);

  //16
  beginShape();
  fill(58, 83, 105);
  noStroke();
  vertex(653, 229);
  vertex(696, 271);
  vertex(707, 334);
  vertex(673, 310);
  endShape(CLOSE);

  //17
  beginShape();
  fill(200, 163, 140);
  noStroke();
  vertex(673, 309);
  vertex(707, 334);
  vertex(645, 359.5);
  endShape(CLOSE);

  //18
  beginShape();
  fill(57, 91, 137);
  noStroke();
  vertex(785, 327);
  vertex(696, 271);
  vertex(707, 334);
  endShape(CLOSE);

  //19
  beginShape();
  fill(10, 22, 34);
  noStroke();
  vertex(785, 327);
  vertex(752, 378);
  vertex(707, 334);
  endShape(CLOSE);

  //20
  beginShape();
  fill(57, 91, 137);
  noStroke();
  vertex(785, 327);
  vertex(696, 271);
  vertex(755, 270);
  endShape(CLOSE);

  //21
  beginShape();
  fill(35, 80, 119);
  noStroke();
  vertex(785, 327);
  vertex(817, 265);
  vertex(755, 270);
  endShape(CLOSE);

  //22
  beginShape();
  fill(19, 60, 80);
  noStroke();
  vertex(785, 327);
  vertex(817.5, 265);
  vertex(847, 319.5);
  endShape(CLOSE);

  //23
  beginShape();
  fill(106, 126, 150);
  noStroke();
  vertex(758, 229);
  vertex(817, 265);
  vertex(755, 270);
  endShape(CLOSE);

  //24
  beginShape();
  fill(117, 139, 163);
  noStroke();
  vertex(758, 229);
  vertex(817.5, 265);
  vertex(825, 214);
  endShape(CLOSE);

  //25
  beginShape();
  fill(128, 149, 176);
  noStroke();
  vertex(758, 229);
  vertex(739, 126);
  vertex(825, 214);
  endShape(CLOSE);
}
