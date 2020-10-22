
var Dog,happyDog,Database,foodS,foodStock

function preload()
{
  Dog=createSprite(250,250,10,10)
  Dog=loadImage("images/dogimg.png");
  happyDog=loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  

 background(46,139,87)
 
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    Dog=addImage(happyDog);
  }
  drawSprites();
  text("Press up arrow to feed drago his milk",50 ,50);
  textSize(30);
}


function readStock(data)
{
  foodS=data.val();
}



function writeStock (x)
{
   if(x<=0)
{
  x=0
}else{
  x=x-1
}
  database.ref('/').update({
    food:x
   })
 }




















