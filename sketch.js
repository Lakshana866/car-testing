var car;
var block;
var speed, weight;
function setup() {
  createCanvas(1000,400);
  speed = random(20, 100);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  block = createSprite(900, 200, 60, height/2);
  createEdgeSprites();
}

function draw() {
  background(255,255,255);
  if(block.x-car.x<car.width/2+block.width/2 ){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500
    if(deformation>180){
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation>100 && deformation<180){
      car.shapeColor = color(230, 230, 0);
    }
    if(deformation<100){
      car.shapeColor = color(0, 255, 0);
    }
  }  
  
  drawSprites();
}