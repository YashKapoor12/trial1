var World=Matter.World,
	Engine=Matter.Engine,
	Bodies=Matter.Bodies,
	Body=Matter.Body,
	Constraint=Matter.Constraint

var engine;
var world;
var character1;
var platforms=[];
var chains=[];
var health=100;
var enemy;

function setup(){
	createCanvas(1100,700);
	engine=Engine.create();
	world=engine.world;

	character1=new Character(150,200,40,50);
		
	 enemy=new Boss(940,600,10,10);
	platforms.push( ground=new Platform(width/2,height,width,40));
 	platforms.push(new Platform(100,675,200,150,))

 	platforms.push(new Platform(300,300,100,15));
 	platforms.push(new Platform(450,150,100,15));
 	platforms.push(new Platform(600,180,100,15));
 	platforms.push(new Platform(750,120,100,15));
 	platforms.push(new Platform(900,200,100,15));
}
function mousePressed(){
	if(mouseX-character1.character.position.x<200){
		if(mouseX-platforms[2].body.position.x<=50 && mouseY-platforms[2].body.position.y<8){
			chains.push(new Chain(mouseX,mouseY));
		}
		else if(mouseX-platforms[3].body.position.x<=50 && mouseY-platforms[3].body.position.y<8){
			chains.push(new Chain(mouseX,mouseY));
		}
		else if(mouseX-platforms[4].body.position.x<=50 && mouseY-platforms[4].body.position.y<8){
			chains.push(new Chain(mouseX,mouseY));
		}
		else if(mouseX-platforms[5].body.position.x<=50 && mouseY-platforms[5].body.position.y<8){
			chains.push(new Chain(mouseX,mouseY));
		}
		else if(mouseX-platforms[6].body.position.x<=50 && mouseY-platforms[6].body.position.y<8){
			chains.push(new Chain(mouseX,mouseY));
		}
	}
}
function mouseReleased(){
	for(var tf=0;tf<chains.length;tf++){
		chains[tf].release()
		chains.pop(chains[tf])
	}
}
function draw(){
	background(51);
	Engine.update(engine)

		for (var i = 0;i<platforms.length;  i++) {
			platforms[i].display();
		}
		for(var j=0;j<chains.length;j++){
			chains[j].display();
		}
	 	character1.display();
		push();
		fill('red');
		stroke('black');
		strokeWeight(5)
		rect(50,40,100,30);
		pop();
		push();
		fill('green');
		rect(50,40,health,30);
		pop();
		text('Health: '+health,60,60)
		
	}