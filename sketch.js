var Ground,Paperball;
varDustbin,Dustbin2,Dustbin3;
const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	Dustbin1=createSprite(630,620,10,80);
	Dustbin2=createSprite(750,620,10,80);
	Dustbin3=createSprite(690,655,120,10);
    Paperball=createSprite(100,620,20,20);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    GroundSprite=createSprite(width/2, height-35, width,10);
	GroundSprite.shapeColor=color(255)
	Paperball.shapeColor=color(230,230,0)
	Dustbin1.shapeColor=color(255,0,0)
	Dustbin2.shapeColor=color(255,0,0)
	Dustbin3.shapeColor=color(255,0,0)

   engine = Engine.create();
   world = engine.world;

   
 
   

   
   Ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, Ground);

	Dustbin1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world,Dustbin);
	
	 Dustbin2= Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, Dustbin2);
	
	Dustbin3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, Dustbin3);

   Engine.run(engine);



	
  
}


function draw() {
  rectMode(CENTER);
  backGround(0);
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paperball.body,Paperball.body.position,{x:85,y:-85})
	 
    }
   }
   


