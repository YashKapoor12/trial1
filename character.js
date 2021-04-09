class Character{
	constructor(x,y,w,h){
		var options={
			restitution:0,
			friction:1.9
		}
		this.character=Bodies.rectangle(x,y,w,h,options);
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;		
		World.add(world,this.character);
	}
	display(){
		push();
		var pos=this.character.position;
		translate(pos.x,pos.y);
		var angle=this.character.angle;
		rotate(angle)
		rectMode(CENTER)
		rect(0,0,this.w,this.h);
		pop();

	}
}