var moving,fixed;




function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 100,50);
  moving.shapeColor = "white";
  
  fixed = createSprite(200,200,100,50);
  fixed.shapeColor = "white";
}

function draw() {
  background(0);  

moving.x = mouseX;
moving.y = mouseY;

if(moving.x - fixed.x < moving.width/2 + fixed.width/2 &&
  fixed.x - moving.x < moving.width/2 + fixed.width/2 &&
  moving.y - fixed.y < moving.height/2 + fixed.height/2 &&
  fixed.y - moving.y < moving.height/2 + fixed.height/2){
    moving.shapeColor = "black";
    fixed.shapeColor = "black";

  }
  else{
    moving.shapeColor = "white";
    fixed.shapeColor = "white";
  }

  drawSprites();
}