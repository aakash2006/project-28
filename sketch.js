
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree,treeimg;
var boy,boyimg;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var string;
var mangoBodyPosition, stoneBodyPosition;

function preload()
{
	treeimg = loadImage("tree.png");
	boyimg = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(110,490,5);
	mango1 = new Mango(630,100,40);
	mango2 = new Mango(700,180,40);
	mango3 = new Mango(850,160,40);
	mango4 = new Mango(950,250,40);
	mango5 = new Mango(850,280,40);
	mango6 = new Mango(820,100,40);
	mango7 = new Mango(600,280,40);
	mango8 = new Mango(750,130,40);
	mango9 = new Mango(500,250,40);
	mango10 = new Mango(600,180,40);
	mango11= new Mango(750,290,40);


    string = new SlingShot(stone.body,{x:110,y:500});

	boy = createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.09;

	tree = createSprite(730,340);
	tree.addImage(treeimg);
	tree.scale=0.5;
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white'); 

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);

  drawSprites();

  
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  
 

 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:110,y:500});
		string.attach(stone.body);
	}
}
function detectollision(Lstone,Lmango){
 mangoBodyPosition = Lmango.body.position;
 stoneBodyPosition = Lstone.body.position;

 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=Lmango.r + Lstone.r){
	Matter.Body.setStatic(Lmango.body,false);
}
}


