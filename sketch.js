const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,box3,box4;
var ground ;
var ball;


function setup(){
createCanvas(1200,600)
engine=Engine.create();
world=engine.world

box1=Bodies.rectangle(600,300,50,60);
World.add(world,box1);

box2=Bodies.rectangle(700,400,50,80);
World.add(world,box2);

box3=Bodies.rectangle(800,400,60,80);
World.add(world,box3);

box4=Bodies.rectangle(500,200,50,80);
World.add(world,box4);
var order1={
isStatic:true
}
ground=Bodies.rectangle(600,500,1200,30,order1);
World.add(world,ground);

ball=Bodies.circle(300,100,30)
World.add(world,ball);
}

function draw(){
  background("lightblue");
  Engine.update(engine)

  rectMode(CENTER)
 rect(box1.position.x,box1.position.y,50,60);
rect(box2.position.x,box2.position.y,50,80);
rect(box3.position.x,box3.position.y,60,80);
rect(box4.position.x,box4.position.y,50,80);
rect(ground.position.x,ground.position.y,1200,30);
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30,30);

}