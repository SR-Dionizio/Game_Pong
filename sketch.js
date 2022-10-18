//Variaveis da bolinha
let yBolinha = 200;
let xBolinha = 300;
let diametroBolinha = 20;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametroBolinha / 2;

//Variaveis da minha raquete
let xRaquete = 0;
let yRaquete = 200;
let raqueteComprimento = 10;
let raqueteAltura = 100;
let colidiu = false;

//Variaveis da raquete do oponente
let xRaqueteOponente = 630;
let yRaqueteOponente = 150;
let velocidadeYOponente = 3;

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(640, 400);
  trilha.play();
}

function draw() {
  background (0);
  formatoDaBolinha ();
  velocidadeDabolinha (); 
  colisaoComABorda ();
  formatoDaRaquete (xRaquete, yRaquete);
  movimentarMinhaRaquete ();
  colisaoRaquete (xRaquete, yRaquete);
  colisaoRaquete (xRaqueteOponente, yRaqueteOponente);
  formatoDaRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
  PlacarDoJogo ();
  fazMeusPontos ();
  fazPontosOponente ();
}
  
  
function formatoDaBolinha () {
  circle(xBolinha, yBolinha, diametroBolinha);
}
  
function velocidadeDabolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function colisaoComABorda () {
  
  if(xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXBolinha *= -1;
     }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeYBolinha *= -1;
     }
}
  
function formatoDaRaquete (x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}


function movimentarMinhaRaquete (){
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function colisaoRaquete (x, y) {
 colidiu = 
  collideRectCircle (x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
 
  if (colidiu){
      velocidadeXBolinha *= -1
      }
  }


function movimentaRaqueteOponente(){
  if(yBolinha - raio < 0){
    velocidadeYOponente *= -1;
  } else if(yBolinha + raio > 400){
    velocidadeYOponente *= -1
  }
  yRaqueteOponente += velocidadeYOponente;
}
  
function PlacarDoJogo () {
  //fill = preenchimento do retangulo do meu placar
  fill (color(34,139,34));
  rect(150, 10, 40, 30);
  //preechimento do retangulo do placar do oponente
  fill (color(34,139,34));
  rect(450, 10, 40, 30);
  textSize(25);
  textAlign(CENTER);
  fill (255);
  //preenchimento do texto do meu placar
  text (meusPontos, 170, 35);
  //preenchimento do texto do placar do oponente
  fill (255);
  text (pontosDoOponente, 470, 35);
}

function fazMeusPontos () {
  if(xBolinha + raio > width) {
    pontosDoOponente += 1;
    }
  }

function fazPontosOponente () {
  if (xBolinha - raio < 0) {
    meusPontos += 1;
  }
}