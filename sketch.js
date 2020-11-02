
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper,ground	
var world;

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1100,550);
	paper=new Paper(200,450,40);

	//Create a Ground
	ground=new Ground(width/2,670,width,20);

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0)
 
  dustbin.display();
  paper.display();
  ground.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  	}
}





