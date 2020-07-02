var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new paper(500,495,50,50);
	ground1=new Ground(500,500,1000,20);
	bin1=new BIN(800,480,200,20);
	bin2=new BIN(695,450,30,80);
	bin3=new BIN(900,450,30,80);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  Engine.update(engine);
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-86});
	}
}



