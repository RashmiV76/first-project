var box
function setup() {
  createCanvas(600,600);
box=createSprite(200,200,50,50)

}

function draw() 
{
  background("green");
 
  if(keyDown("RIGHT_ARROW")){
  box.x=box.x+5
  }
  drawSprites();
  
  
}




