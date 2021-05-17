var background, backgroundImg;
var bottle, bottleImg;
var shape, shapeImg;
var trophy, trophyImg;
var background2, background2Img;
var gameState = "play";


function preload(){
backgroundImg = loadImage("images/background.jpg");
background2Img = loadImage("images/background2.jpg");
bottleImg = loadImage("images/bottle.png");
shapeImg = loadImage("images/shape.png");
trophyImg = loadImage("images/trophy.png");
sound1 = loadSound("sounds/sound1.mp3");
sound2 = loadSound("sounds/sound2.mp3");
}

function setup() {
createCanvas(1300,600);

sound1.play ();
shape = createSprite(600,300,50,50);
shape.addImage(shapeImg);



trophy = createSprite(600,300,50,50);
trophy.addImage(trophyImg);
trophy.visible = false;
}

function draw() {

background(backgroundImg);

  bottle1();
textFont("lucida handwriting");
stroke ("grey");
fill ("black");
textSize(30);
text("Fit the bottle in the shape !!",100,50);

if(mousePressedOver(shape)){
gameState = "end";
bottle.collide(shape)
}


if(gameState === "end"){
background(background2Img);
sound1.stop();
sound2.play();

textSize(30);
fill("purple");
text("You win !!",525,200);
trophy.visible = true;
bottle.visible = false;
shape.visible = false;

}

drawSprites();
}

function  bottle1(){
  if(frameCount%120===0){
    bottle = createSprite(0,300,50,50);
    bottle.addImage(bottleImg);
    bottle.scale = 0.6;
    bottle.velocityX = 15;
   bottle.rotationSpeed=10;
  
    }


}