var wall , player;
var player_weight; 
var  deformation;

function setup() {
  createCanvas(800,400);
  wall = createSprite(800,100,30,800);
  player = createSprite(200,200,50,50);
  
}

function draw() {
  background("Black");
  wall.shapeColor = "Red"; 
  player.shapeColor = "Blue"; 
  
  drawSprites();


  player_weight = 1302;
  
  
  if(keyDown("right")){
    player.velocityX = 5;
  }
 
 
  player.collide(wall)

  deformation = (0.5 * player_weight * player.velocityX) / 22500;


if(player.x > 755){
  text(`Score: ${deformation}`, 300,300);  
}

  drawSprites();
}