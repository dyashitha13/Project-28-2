var ground , tree , stone , boy , boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var slingshot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,height,800,25);
  
	mango1 = new Mango(650,360,30);
	mango2 = new Mango(550,200,40);
	mango3 = new Mango(550,300,30);
	mango4 = new Mango(650,150,40);
	mango5 = new Mango(700,100,30);
	mango6 = new Mango(400,250,40);
	mango7 = new Mango(540,60,30);
	mango8 = new Mango(750,200,30);
	mango9 = new Mango(650,250,40);
  mango10 = new Mango(750,200,30);
  
  tree = new Tree(650,360,700,700);
  
  stone = new Stone();
  

  boy = Bodies.rectangle(50,200,20,20);
  World.add(world,boy);
  
  slingshot = new SlingShot(stone.body,{x:100, y:300});


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(37,102,175);

  ground.display();

  tree.display();

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

  slingshot.display();

  imageMode(CENTER);
  image(boyImage,boy.position.x,boy.position.y,45,45);


  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
  slingshot.fly();
}


function detectcollision(stone,Mango){
  MangoBodyPosition = Mango.body.position
  stoneBodyPosition = stone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
  if(distance<-Mango.r + stone.r)
  {
    Matter.Body.setStatic(Mango.body,false)
  }
}

