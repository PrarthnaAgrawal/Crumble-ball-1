
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground;
var dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,670,width,20)
	paper=new Paper(200,450,20)
	dustbin = new Dustbin(1400,645,210,20)
	dustbin2= new Dustbin(1300,605,20,100)
	dustbin3=new Dustbin(1500,605,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
         Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:100})
	}
}


