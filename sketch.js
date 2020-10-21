var car,wall;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(200,200,60,50);
  wall.shapeColor=color('red');
 
}

function draw() {
  background(255,255,255);  

  drawSprites();
}