const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball1=new Ball(320,300)
	ball2=new Ball(360,300)
	ball3=new Ball(400,300)
	ball4=new Ball(440,300)
	ball5=new Ball(480,300)

	rope1=new rope({x:320,y:100},ball1.body)
	rope2=new rope({x:360,y:100},ball2.body)
	rope3=new rope({x:400,y:100},ball3.body)
	rope4=new rope({x:440,y:100},ball4.body)
	rope5=new rope({x:480,y:100},ball5.body)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
ball1.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45})
	}
}