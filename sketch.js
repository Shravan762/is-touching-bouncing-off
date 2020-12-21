var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-5
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=+5
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 go1=createSprite(100,100,50,50)
 go2=createSprite(200,100,50,50)
 go1.shapeColor="green"
 go2.shapeColor="green"
  if (isTouching(go1,movingRect)){
    movingRect.shapeColor = "red";
     go1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    go1.shapeColor = "green";
  }
bounceoff(movingRect,fixedRect)

  drawSprites();
}
