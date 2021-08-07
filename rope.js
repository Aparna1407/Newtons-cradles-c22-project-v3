class rope{
	constructor(pointA,bodyB)
	{
	var options={
		pointA:pointA,
		bodyB:bodyB,
		length:250,
		shiffness:0.04

	}
	//create rope constraint here
	this.rope=Constraint.create(options);

	World.add(world,this.rope);
	}

display(){
	var pointA=this.rope.pointA
	var pointB=this.rope.bodyB.position

	line(pointA.x,pointA.y,pointB.x,pointB.y)
}
    //create display() here 

}
