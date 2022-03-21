
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

let engine;
let world;
let chao;
let ball;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	chao = new Chao(600, 650, 1200, 20)

	Engine.run(engine);

	var opcoes={
		isStatic: false,
		restitution: 0.8,
		
		density: 1.2
	}

	ball = Bodies.circle(100, 350, 30, opcoes)
    World.add(world, ball)

	parede1 = new Chao(1100, 565, 20, 150)
	World.add(world, parede1)

	parede2 = new Chao(800, 565, 20, 150)
	World.add(world, parede2)
}


function draw() {
  background("gray")
  rectMode(CENTER);
  Engine.update(engine)

  chao.display()
  parede1.display()
  parede2.display()
  ellipseMode(RADIUS)
  
  push()
  fill("red")
  ellipse(ball.position.x, ball.position.y, 30)
  pop()
 
}

function poder(){
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:99, y:-99})

}

function keyPressed(){
	if (keyCode === 39){
		poder()
	}

}


