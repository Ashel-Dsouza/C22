const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground_options = 
  {
    isStatic:true
  }
  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);
  ball_options = 
  {
    restitution:0.4
  }
  ball = Bodies.circle(40,30,80,ball_options);
  World.add(world,ball);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,80,80);  
  drawSprites();
}