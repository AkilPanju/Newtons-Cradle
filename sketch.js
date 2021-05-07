
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Roof(400,200,800,10);
	bob1 = new Bob(320,300,50);
	bob2 = new Bob(360,300,50);
	bob3 = new Bob(400,300,50);
	bob4 = new Bob(440,300,50);
	bob5 = new Bob(480,300,50);
	bobDiamter = 40;
	rope1 = new Rope(bob1.body,{x:320,y:200});
	rope2 = new Rope(bob2.body,{x:360,y:200});
	rope3 = new Rope(bob3.body,{x:400,y:200});
	rope4 = new Rope(bob4.body,{x:440,y:200});
	rope5 = new Rope(bob5.body,{x:480,y:200});

  
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  
  roof.display();
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
  
  
 
 
  drawSprites();
 
}

function keyPressed() {
	if(keyCode == 32) {
		Matter.Body.setPosition(bob1.body,{x:150,y:250});

	}
}


