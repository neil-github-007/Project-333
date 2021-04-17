const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinkoArray = [];
var divisions = [];
var particleArray = [];
var ground;

var score = 0;
var divisionHeight = 250;
var turns = 0;

var gameState = "play";

function setup() {
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkoArray.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkoArray.push(new Plinko(j,150));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkoArray.push(new Plinko(j,225));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkoArray.push(new Plinko(j,300));
    }

    ground = new Ground(400, 595, 800, 10);

}

function draw() {
    if(gameState === "play") {
        background("black");

        Engine.update(engine);

        for (var i = 0; i < plinkoArray.length; i++) {
            plinkoArray[i].display();
        }

        for (var k = 0; k < divisions.length; k++) {
            divisions[k].display();
        }
        
        textSize(20);
        fill("white");
        text("Score: " + score, 5, 25);

        ground.display();
        

        if (turns === 5) {
            gameState = "end";
        }
    }    

    if(gameState === "end") {
        textSize(30);
        fill("white");
        text("GAME OVER ", 200, 300);
        text("Score: " + score, 300, 400);
    }

}

function mousePressed() {
    if(gameState !== "end") {
        turns++;
        
        var newParticle = new Particle(mouseX, 10, 10);
        
        
        
    }
}



