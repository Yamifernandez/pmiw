function cuadrado ( x, y, t, ubic) {

  if ((x+y)%2==0) {
    fill(0);
  } else {
    fill (245);
  }
  rect (x*modulo+ubic, y*modulo, t, t);
}


function circulo ( x, y, t) {
  if (keyIsPressed) {
    key = 'a';
    fill(random(255), 0, 0);//
  } else {
    if ((x+y)%2==0) {
      fill(245);
    } else {
      fill (0);
    }
  }
  circle(x*modulo+420, y*modulo+20, t-tamaño/2);
}
function EnObra( miMouse, mitadPantalla) {
  if ( miMouse > mitadPantalla ) {
    return true;
  } else {
    return false;
  }
}
