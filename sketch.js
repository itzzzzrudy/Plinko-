const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var divisions=[];
var plinkos=[];
var particles=[];
function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height-10,width,20)
  var divisionHeight=300
  for (var i=0; i<=width; i=i+79.5){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  for (var j=15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,150,10));
  }
  for (var j=40; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,225,10));
  }
  for (var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,300,10));
  }
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  if(frameCount%20===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));

  }
  for (var i=0; i<divisions.length; i++){
    divisions[i].display();
  }
  
  for (var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for (var k=0; k<particles.length; k++){
    particles[k].display();
  }
}