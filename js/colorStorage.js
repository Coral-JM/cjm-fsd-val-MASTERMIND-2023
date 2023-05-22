
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

    //Evento que se ejecuta al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    // Buscar el botón "COMENZAR" en la página
const botonComenzar = document.querySelector(".btn-cp");

    // Asignar el evento de click al botón para almacenar los colores
    if (botonComenzar) {
        botonComenzar.addEventListener("click", almacenarColores);
    }
});

//RECUPERACIÓN DE COLORES DE SESSION STORAGE

const coloresGuardados = JSON.parse(sessionStorage.getItem("seleccionColores"));
