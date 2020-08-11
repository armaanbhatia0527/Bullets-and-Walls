var thickness,wall;
var bullet,speed,weight;
const canvas_width = 1600
const canvas_height = 400;
function setup() {
  createCanvas(canvas_width,canvas_height);
    
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(50,200,50,20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"

  wall = createSprite(1200,200,thickness,canvas_height/2);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0,0,0); 

  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage > 10){
      wall.shapeColor = color(255,0,0)
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0)
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall){

bulletRightEdge = lbullet.x + lbullet.width;

wallLeftEdge = lwall.x;

if(bulletRightEdge>= wallLeftEdge){
    return true;
}
return false;
}