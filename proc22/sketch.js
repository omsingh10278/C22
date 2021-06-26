const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;

function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic:true
  }

 ground = Bodies.rectangle(200,380,400,50,option);
  World.add(world,ground)

  var option1 = {
   restitution: 1.3
  }

 ball = Bodies.circle(200,150,20,option1);
  World.add(world,ball)

  console.log(box)            
}
function draw()
{
  background("pink");

  Engine.update(engine)
  rectMode(CENTER);

   rect(ground.position.x,ground.position.y,400,10);


   ellipseMode(RADIUS);

   ellipse(ball.position.x,ball.position.y,20,20);
  
}
