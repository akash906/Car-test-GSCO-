var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,thickness,height/2); 
  wall.shapeColour=("blue");
  
  bullet.velocityX=speed;

}

function draw() {
  background(255);
 if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);

  }
  if(deformation<180 && deformation>100)
  car.shapeColor=color(230,230,0)

}

if (deformation<100)
{
  car.shapeColor=color(0,255,0);
}
  drawSprites();
}
function hasCollied(bullet,wall) 
{
  bulletRightEdge-bullet.x+bullet.width;
  wall.LeftEdge -wall.x;
  if(bulletRightEdge><wallLeftEdge)
  {
      return true
  
  return false

if(hasCollied(bullet,wall))

  bullet.velocityX=0;
  var damage=0.5 * weight * speed*speed/(thickness *thickness *thickness);
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  

  if(damage<10)
  
    wall.shapeColor=color(0,255,0);
  }

}