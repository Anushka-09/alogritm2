var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;


function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(200, 200, 50, 50);
 fixedRect.shapeColor = "red";

 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "red";
 gameObject1 = createSprite(100,100,50,50);
 gameObject2 = createSprite(200,100,50,50);
 gameObject3 = createSprite(300,100,50,50);
 gameObject4 = createSprite(400,100,50,50);
 gameObject1.shapeColor = "pink";
 gameObject2.shapeColor = "pink";
 gameObject3.shapeColor = "pink";
 gameObject4.shapeColor = "pink";


}

function draw() {
  background("black");  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;
if(isTouching(movingRect,gameObject4)){
movingRect.shapeColor = "blue";
gameObject4.shapeColor = "blue";


}
else{
  movingRect.shapeColor = "red";
  gameObject4.shapeColor = "red"; 
}







  drawSprites();
}




