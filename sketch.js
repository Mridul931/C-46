var traffic, trafficImg;
var coinImg, coin;
var car, carImg;
var road,roadImg;
var gameState = "play"
var trafficGroup;
var coinGroup;

function preload(){
 
    trafficImg = loadImage("traffic.png");
    coinImg = loadImage("coin.jpg");
    carImg = loadImage("car.png");
    roadImg = loadImage("road.png");

}

function setup(){
  createCanvas(600,600);
  
  road = createSprite(300,300);
  road.addImage("track", roadImg);
  road.velocityY = 2;
  
  trafficGroup = new Group();
  coinGroup = new Group();

  
  car = createSprite(300,380,50,50);
  car.scale = 1;
  car.addImage("player", carImg);
}

function draw(){
    background(0);
    

  
    //if(keyDown("left_arrow")){
     // car.x = car.x - 5;
    //}
    
    //if(keyDown("right_arrow")){
    //  car.x = car.x + 5;
    //}
    

 
    //if(road.y > 329){
      //road.y = 300
    //}
    
    
  
  
 //if(trafficGroup.isTouching(car)){

 //car.velocityY = 0;
 //car.velocityX = 0;

 //trafficGroup.velocityYEach = 0;
  //road.velocityY =0;  
  //trafficGroup.visible = false;

  //stroke("yellow");
    //fill("yellow");
    //textSize(30);
    //text("Game Over", 300,300)

 //}

 if (gameState === "play") {
  if(keyDown("left_arrow")){
    car.x = car.x - 5;
  }
  
  if(keyDown("right_arrow")){
    car.x = car.x + 5;
  }
  

  
  
  
  if(road.y > 329){
    road.y = 300
  }
 

  
  //climbersGroup.collide(ghost);
  if(trafficGroup.isTouching(car)){
    car.velocityY = 0;
    car.destroy();
    gameState = "end"
  }

  
  
}

if (gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over", 230,250)
}


   
 
 spawnCar();

  drawSprites();












}

function spawnCar(){
  if (frameCount%100 === 0){
  
  var traffic = createSprite(200,10,20,20);
  traffic.x = random(50,500);
  traffic.scale = 0.9;
  traffic.addImage("cars",trafficImg);
  traffic.velocityY =5;
  trafficGroup.add(traffic);
  



  }
}

