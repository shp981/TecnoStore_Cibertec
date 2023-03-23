// Inicio del Banner 
var imagenes = new Array (4);
imagenes[0] = '../imagenes/banner_2.png';
imagenes[1] = '../imagenes/banner_3.png';
imagenes[2] = '../imagenes/banner_4.jpg';
imagenes[3] = '../imagenes/banner_2.png';


var i = 0;
function carrusel (){
    i++;
    if (i>imagenes.length-1){
        i=0;

    }
    document.getElementById('imgbaner').setAttribute('src', imagenes[i]);
    setTimeout('carrusel()',1000);
}
document.body.setAttribute('onload','carrusel()');

// Fin de Banner


