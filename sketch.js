var car,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1000,400);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  car = createSprite(50,200,50,50)
  wall = createSprite(800,200,thickness,60,height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed;
  car.shapeColor = color("grey");
}

function draw() {
  background(255,255,255); 
  if(wall.x - car.x < (car.width+wall.width)/2) 
  {
    car.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage > 10)
    {
      wall.shapeColor = color(255,0,0);
    }
    if(damage < 10)
    {
      wall.shapeColor = color(0,255,0);
    }
    
  }
  drawSprites();
}