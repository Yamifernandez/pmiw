//Yamila Abigail Fernàndez Legajo:119024/1
//Com: 2
// https://youtu.be/zY2zfyVcqaE


let tamaño;
let modulo;

function preload() {
  arte = loadImage ('/data/F_42.png');
}



function setup() {
  createCanvas(800, 400);
 tamaño =40;
modulo=40
}


function draw() {
  image (arte, 0, 0, 400, 400);
  for (let x=0; x<800; x++) {
    for (let y=0; y<400; y++) {
      cuadrado(x, y, tamaño,400);

      if (EnObra(mouseX, width/2)) {
        let d = dist(mouseX, mouseY, x*modulo+400, y*modulo+10);
        let mov = map(d, 0, 565, modulo/2, modulo*2);
        circulo (x, y, mov);
      } else {
        circulo (x, y, tamaño);
      }
    }
  }
}
