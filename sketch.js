var boy, boyImg
var werewolf,werewolfImg, vampire, vampireImg, zombie,zombieImg
var  castleImg
var coins,obstacles
var lives
var coinsGroup,obstacleGroup
var gameState
 var score=0;

function preload(){

  boyImg = loadImage("sprites/boy.png");
  werewolfImg = loadImage("sprites/werewolf.jpg");
  vampireImg = loadImage("sprites/vampire.jpg");
  zombieImg = loadImage("sprites/zombie.jpg");
  castleImg = loadImage("sprites/castle.jpg")
  coinImg = loadImage("sprites/coin.jpg")
}
 function setup(){
 
  canvas = createCanvas(windowWidth, windowHeight);

  boy = createSprite(50,windowHeight-165, 50, 50);
   boy.addImage(boyImg)

   ground = createSprite(windowWidth/2, windowHeight-50, windowWidth, 20)
   ground.visible = "false";
   
   coinsGroup = new Group();
   obstacleGroup = new Group();
 }

function draw(){

    background(castleImg);
 
   if(keyDown("space")){
     boy.velocityX = 5;
  }
  if(keyDown(UP_ARROW ) && boy.y>= 100){
    boy.velocityY = -12;
  
  }

  boy.velocityY = boy.velocityY+0.8
  
  
    drawSprites();
}