var track;
var road;
var boundary1;
var boundary2;
var boy;
function preload(){
  //pre-load images
  track = loadImage("path.png");
  running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //sprite for track
  road = createSprite(200,200);
  road.addImage(track);
  road.scale=1.2;
  road.velocityY = 4;
  //sprite for boy
  boy = createSprite(200,200);
  boy.addAnimation("boy_running",running);
  boy.scale=.05;
  //sprites for boundaries
  boundary1 = createSprite(70,200,5,400);
  boundary2 = createSprite(400,200,5,400);
  boundary1.visible=false;
  boundary2.visible=false;

}

function draw() {
  background(0);
  if(road.y>400){
    road.y = height/2;
  }
boy.x=mouseX;
boy.collide(boundary1);
boy.collide(boundary2);
console.log(boy.x);
  drawSprites();
}
