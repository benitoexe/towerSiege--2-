const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var sling_Shot;
var polygon_img;
var block17, block18, block19, block20, block21, block22, block23 ,block24, block25,block26,block28,
block29, block30, block31, block32, block33, block34;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(800,300,200,10);
  ball = new Polygon(200,500,20);

  //LEVEL ONE
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //LEVEL TWO
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //LEVEL THREE
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //TOP
  block16 = new Block(390,155,30,40);

  block17 = new Block(720,275,30,40);
  block18 = new Block(750,275,30,40);
  block19 = new Block(780,275,30,40);
  block20 = new Block(810,275,30,40);
  block21 = new Block(840,275,30,40);
  block22 = new Block(870,275,30,40);

  block23 = new Block(735,235,30,40);
  block24 = new Block(765,235,30,40);
  block25 = new Block(795,235,30,40);
  block26 = new Block(825,235,30,40);
  block27 = new Block(855,235,30,40);

  block28 = new Block(750,195,30,40);
  block29 = new Block(780,195,30,40);
  block30 = new Block(810,195,30,40);
  block31 = new Block(840,195,30,40);

  block32 = new Block(765,100,30,40);
  block33 = new Block(795,100,30,40);
  block34 = new Block(826,100,30,40);

  block35 = new Block(795,70,30,40);

  sling_Shot = new SlingShot(ball.body,{x:100,y:300});

}

function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("yellow");
  block16.display();

  fill("blue")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  fill("orange");
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  fill("lime");
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  fill("skyBlue")
  block32.display();
  block33.display();
  block34.display();
  fill("white");
  block35.display();

  ball.display();
  sling_Shot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   sling_Shot.release();
}

function keyPressed(){
  if(keyCode===32)
  {
    Matter.Body.setPosition(ball.body,{x:100,y:200});
    sling_Shot.attach(ball.body);
  }
}
