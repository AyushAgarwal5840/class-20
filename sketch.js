
var fixedRect, movingRect;
var gameObject1, gameObject2;
var Rect1
var Rect2
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  Rect1 = createSprite(152,200,50,50);
  Rect1.shapeColor = "green";
 
  Rect2 = createSprite(200,150,50,50);
  Rect2.shapeColor = "cyan"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    Rect2.shapeColor = "cyan"
    Rect1.shapeColor = "yellow"
  }
  
  else {
      Rect1.shapeColor = "red"
      Rect2.shapeColor = "orange"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


