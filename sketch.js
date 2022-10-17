//Variaveis da bolinha
let yBolinha = 200;
let xBolinha = 300;
let diametroBolinha = 20;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametroBolinha / 2;

//Variaveis da minha raquete
let xRaquete = 5;
let yRaquete = 200;
let raqueteComprimento = 10;
let raqueteAltura = 100;
let colidiu = false;

//Variaveis da raquete do oponente
let xRaqueteOponente = 625;
let yRaqueteOponente = 150;
let velocidadeYOponente = 3;

function setup() {
  createCanvas(640, 400);
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
  


