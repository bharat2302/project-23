var triangle;
function setup() {
  createCanvas(800,400);
  createSprite(280, 220, 80, 200);
  //after the small one left side one
  createSprite(350, 250, 60, 140);
  //after the big one
  createSprite(410, 275, 100, 90);
  //middle one
  createSprite(480, 250, 60, 140);
  //before the big one
  createSprite(530, 220, 80, 200);
  //befor the small one right side
  createSprite(225,195,10,250);
  //small one left side
  createSprite(585,195,10,250);
  //small one right side
  
  
}

function draw() {
  background(255,255,255);
 
  drawSprites();
}



