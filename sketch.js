const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var jogador, jogadorBase, jogadorArco;
var BaseImg;
var jogadorImg;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  BaseImg = loadImage("./assets/base.png");
  jogadorImg = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var propriedades_da_base= {
    isStatic: true
  }
  var propriedades_do_jogador= {
    isStatic: true
  }
  //criar corpo da base do jogador
  jogadorBase= Bodies.rectangle (200,350,180,150,propriedades_da_base);
  World.add (world,jogadorBase);
  //criar corpo do jogador
  jogador= Bodies.rectangle (250,jogadorBase.position.y-160,50,180,propriedades_do_jogador);
  World.add (world,jogador);


}

function draw() {
  background(backgroundImg);
  
  //exibir a imagem do jogador usando a função image
 image (jogadorImg,jogador.position.x,jogador.position.y,180,150);

  //exibir a imagem da base do jogador usando a função image
  image (BaseImg,jogadorBase.position.x,jogadorBase.position.y,50,180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
