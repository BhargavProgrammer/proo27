
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Roof(400,100,500,50);

	bob1 = new Bob(260,500,70);
	bob2 = new Bob(330,500,70);
	bob3 = new Bob(400,500,70);
	bob4 = new Bob(470,500,70);
	bob5 = new Bob(540,500,70);

	rope1 = new Rope(bob1.body,{x:260,y:100})
	rope2 = new Rope(bob2.body,{x:330,y:100})
	rope3 = new Rope(bob3.body,{x:400,y:100})
	rope4 = new Rope(bob4.body,{x:470,y:100})
	rope5 = new Rope(bob5.body,{x:540,y:100})
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-90,y:90})
	  }
}
	



