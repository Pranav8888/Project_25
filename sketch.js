//Calling out Matter.js vars 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//Variables!
var engine, world;
var ground; 
var paper;
var bin1, bin2, bin3;

function setup(){
    //Local variable to create the Canvas.
    var canvas = createCanvas(1200, 400);
    
    //Creates the engine and world
    engine = Engine.create();
    world = engine.world;

    //Objects
    ground = new Ground(600, 390, 1200, 20);
    paper = new Paper(300, 320, 70);

    bin1 = new Bin(900, 370, 180, 20);
    bin2 = new Bin(810, 340, 20, 80);
    bin3 = new Bin(990, 340, 20, 80);
}

function keyPressed () {
    if(keyCode === UP_ARROW) {

        Matter.Body.applyForce(paper.body, paper.body.position, {x: 100, y: -100});

    }
}

function draw(){
    background(255);
    
    //Updates engine
    Engine.update(engine);

    //Displays
    ground.display();
    
    paper.display();

    bin1.display();
    bin2.display();
    bin3.display();



}