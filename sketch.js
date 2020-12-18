
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];

function setup() {
	createCanvas(480,800);
	engine = Engine.create();
	world = engine.world;
   ground = new Ground(500,800,1400,40);
   wall1 = new Divisions(5,800,10,550);
   wall2 = new Divisions(80,800,10,550);
   wall3 = new Divisions(160,800,10,550);
   wall4 = new Divisions(240,800,10,550);
   wall5 = new Divisions(320,800,10,550);
   wall6 = new Divisions(400,800,10,550);
   wall7 = new Divisions(475,800,10,550); 
  for(var j = 40; j <= width; j = j+50){
     plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j,175))
  }
  for(var j = 40; j <= width; j = j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var j = 15; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j,375))
  }
   Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  ground.display();
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  if(frameCount % 60 === 0 ){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
}
