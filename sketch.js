
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dustbinImage = loadImage("Image/dustbingreen.png")
}

function setup() {
	createCanvas(1536, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin= createSprite(964,520,20,20);
	dustbin.addImage(dustbinImage)
	dustbin.scale = 0.45;
	


leftwall= new Dustbin(1260,625,130,20)
rightwall= new Dustbin(1030,625,130,20)
bottomwall= new Dustbin(1145,680,250,90)

ground = new Ground(500,height,2072,20)

ball=Bodies.circle(100,50,20)
World.add(world,ball)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
ground.display();
leftwall.display();
rightwall.display();
bottomwall.display();



ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log(ball.position)
		Matter.Body.applyForce(ball,ball.position,{x:195 , y:170})
	}
	
}





