const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

//Testing pull request

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var mConstraint;

var gameState = "onSling";

function preload() 
{
    backgroundImg = loadImage("sprites/bg.png");
}

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
    mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 200);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw()
{
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    


    if(!mouseIsPressed){
    readyToLaunch();
    }
}

function readyToLaunch(){
var pointA = bird.body.position;
var pointB = slingshot.pointB;
let d = dist(pointA.x, pointA.y, pointB.x, pointB.y);
if (d > 60 && pointA.x > 150) {
slingshot.fly();
gameState = "launched";
}
}
