const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var imagemFundo
var comida
var coelho,coelhoImg

function preload(){
 imagemFundo = loadImage("background.png")
 comida = loadImage("melon.png")
 coelhoImg = loadImage("Rabbit-01.png")
}


function setup() 
{
  createCanvas(500,700);
  
  frameRate(80);
 
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  coelho = createSprite(230,620,100,100)
  coelho.addImage(coelhoImg)
  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER)
  
}

function draw() 
{
  background(51);

  image(imagemFundo,width/2,height/2,490,690);
  

  image(comida,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 
   
}
