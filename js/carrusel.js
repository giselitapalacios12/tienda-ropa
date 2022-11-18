let carrusel = document.querySelector(".lista");
//variable para dar el scroll al maximo
let scrolLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
//sera para la velocidad de la barra
let step = 1;

//Creamos un intervalo de inicio
const start = () => {
    intervalo = setInterval(function(){

        carrusel.scrollLeft = carrusel.scrollLeft + step;
    //Hará que la imagen retroceda
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }

    },10);
};

//Creamos un intervalo para un alto o pausa
const stop = () => {
    clearInterval(intervalo);
}

//Creamos un metodo 
carrusel.addEventListener("mouseover", () => {
    stop();
})
carrusel.addEventListener("mouseout", () => {
    start();
})
//para ejecutar solo
start();
