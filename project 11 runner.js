
function preload(){
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //create sprites here
}

function draw() {
  background(0);
//Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;
}

//code to reset  the background
if(path.y > 400){
  path.y = height/2;
}