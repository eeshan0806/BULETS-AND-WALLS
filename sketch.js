var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,90,30)
  wall  = createSprite(1200,200,thickness,height/2);
  thickness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;

}
function hasCollided(lbullet,lwall){
  bulletRightEdge = x + width/2;
  wallLeftEdge = x-width/2;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
  
  
}

function draw() {
  background(255,255,255);
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
    if (damage>10){
      wall.shapeColor = color(255,0,0);
    }
  }
  if (damage<10){
    wall.shapeColor = color(0,255,0);
  }  
  drawSprites();
}