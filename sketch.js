const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;
var box,box1,box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    paper= new Paper(200,300,50,50);
    box= new Box(600,300,20,100);
    box1= new Box(720,300,20,100);
    box2= new Box(600,400,100,20);


}



function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    paper.display();
    box.display();
    box1.display();
    box2.display();

    drawSprites();
    
}