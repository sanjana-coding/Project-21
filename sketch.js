const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }
  var balloption={
    restitution:1
  }
  ground=Bodies.rectangle(200,380,200,20,option);
  World.add(world,ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  console.log(ground);
  ball=Bodies.circle(200,150,20,balloption);
  World.add(world,ball);
  console.log(ball)
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect (ground.position.x,ground.position.y,200,20);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}