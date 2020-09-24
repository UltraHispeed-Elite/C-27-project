
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint = Matter.Contraint;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
  roof = new Roof(width/2, height/4, width/2, 20);
 bobDiameter = 40;
 startingPositionX=width/2;
 startingPositionY=height/4+500;
  bob1 = new Bob(startingPositionX-bobDiameter*2,startingPositionY, bobDiameter);
  bob2 = new Bob(startingPositionX-bobDiameter,startingPositionY, bobDiameter);
  bob3 = new Bob(startingPositionX,startingPositionY, bobDiameter);
  bob4 = new Bob(startingPositionX+bobDiameter,startingPositionY, bobDiameter);
  bob5 = new Bob(startingPositionX+bobDiameter*2,startingPositionY, bobDiameter);
  
  rope1=new Rope(bob1.body,roof.body,-bobDiameter*2, 0);
  rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0);
  rope3=new Rope(bob3.body,roof.body,0, 0);
  rope4=new Rope(bob4.body,roof.body,+bobDiameter*1, 0);
  rope5=new Rope(bob5.body,roof.body,+bobDiameter*2, 0);
  Engine.run(engine);
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
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed (){
  Matter.Body.applyForce(bob1.body, bob1.body.position,{
    x:-50,
    y:-45
  })
  
}

function drawLing (contraint){
  bobPosition=contraint.bodyA.position;
  roofPostion=constraint.bodyB.position;
  roofOffset=constraint.pointB;
  roofx=roofPosition.x+roofOffset.x;
  roofy=roofPosition.y+roofOffset.y;
  line (bobPosition.x, bobPosition.y, roofx, roofy);s
}


