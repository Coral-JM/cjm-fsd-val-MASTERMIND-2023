
// ALMACENAJE DE LOS COLORES DEL USUARIO
const almacenarColores = () => {
    const circles = document.getElementsByClassName("circle-cp");
    const seleccionColores = [];

    Array.from(circles).forEach(circle => {
        const color = circle.style.backgroundColor;
        seleccionColores.push(color);
    });

sessionStorage.setItem("seleccionColores", JSON.stringify(seleccionColores));

console.log(JSON.parse(sessionStorage.getItem("seleccionColores")));
};

    //Carga los elementos una vez abierta la página
window.addEventListener("DOMContentLoaded", () => {
    //Almacenaje de los colores escogidos por el usuario al apretar COMENZAR (solo guarda los colores de los círculos, no los del input color)
const botonComenzar = document.querySelector(".btn-cp");

    //Evento de click al botón para almacenar los colores
    if (botonComenzar) {
        botonComenzar.addEventListener("click", almacenarColores);
    }
});

//RECUPERACIÓN DE COLORES DE SESSION STORAGE

const coloresGuardados = JSON.parse(sessionStorage.getItem("seleccionColores"));

document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".userColors");

    if (sessionStorage.getItem("seleccionColores")) {
        const coloresGuardados = JSON.parse(sessionStorage.getItem("seleccionColores"));
        
        circles.forEach((circle, index) => {
        circle.style.backgroundColor = coloresGuardados[index] || "transparent";
        });
    }
});

//OBTENCIÓN DE COMBINACIÓN RANDOM SECRETA

const storedColors = JSON.parse(sessionStorage.getItem("seleccionColores"));

// Deben haber mínimo cuatro colores seleccionados
if (storedColors.length < 4) {
    console.log("No hay suficientes colores almacenados.");
} else {
  //OBTENCIÓN DE COMBINACIÓN RANDOM
    const shuffledColors = storedColors.sort(() => Math.random() - 0.5).slice(0, 4);

  // Pintar los círculos con los colores seleccionados
    const secretCircles = document.getElementsByClassName("secret");
        Array.from(secretCircles).forEach((circle, index) => {
        circle.style.backgroundColor = shuffledColors[index];
    });
}