var CLOCK , CLOCKImg;

function preload(){
  CLOCKImg = loadImage ("comhiclipartygbkp.png");
}

function setup() {
  createCanvas(800,400);
 var CLOCK = createSprite(400, 200, 50, 50);
 CLOCK.addImage(CLOCKImg);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}