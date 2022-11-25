var trex, trex_running, edges;
var groundImage,ground

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  //creating ground
  ground = createSprite(300,180,600,5);
  ground.addImage("ground", groundImage)
  ground.velocityX = -3
}


function draw(){
  //set background color 
  background("white");
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5

  trex.collide(ground)
  drawSprites();
} 