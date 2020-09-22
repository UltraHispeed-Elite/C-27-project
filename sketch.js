
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  roof = new Roof(width/2, height/4, width/2, 20);
 bobDiameter = 40;
 startingPositionX=width/2;
 startingPositionY=height/4+500;
  bob1 = new Bob(startingPositionX-bobDiameter*2,startingPositionY, bobDiameter);
  bob2 = new Bob(startingPositionX-bobDiameter,startingPositionY, bobDiameter);
  bob3 = new Bob(startingPositionX,startingPositionY, bobDiameter);
  bob4 = new Bob(startingPositionX+bobDiameter,startingPositionY, bobDiameter);
  bob5 = new Bob(startingPositionX+bobDiameter*2,startingPositionY, bobDiameter);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}



