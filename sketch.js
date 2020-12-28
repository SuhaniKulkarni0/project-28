
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5
var boyImage, treeImage, tree

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png")
	treeImage = loadImage("Plucking mangoes/tree.png")
}

function setup(){
	
    createCanvas(1350, 600);

	tree = createSprite(600,600,100,300);
    tree.addImage(treeImage);
    tree.scale=0.4;

	boy = createSprite(200,600,50,50)
	boy.addImage(boyImage)
	boy.scale = 0.4

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 580, 1350, 40);
	stone = new Stone(250, 300, 40);
	constraint1 = new clearConstraint(stone.body, {x:200, y:460});
	
	
	mango1 = new Mango(1170, 200, 30);
    mango2 = new Mango(1100, 250, 30);
    mango3 = new Mango(1090, 170, 30);
    mango4 = new Mango(930, 180, 30);
    mango5 = new Mango(1000, 200, 30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  constraint1.display();
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    constraint1.fly()
}

function detectCollission(lstone, lmango){
	mangoPos = lmango.body.position
	stonePos = lstone.body.position

	var distance = dist(stonePos.x, stonePos.y, mangoPos.y)

	if(distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body.false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		constraint1.attach(stone.body)
	}
}



