
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

const recuperacionColores = JSON.parse(sessionStorage.getItem("seleccionColores"));

    // Deben haber mínimo cuatro colores seleccionados
if (recuperacionColores.length < 4) {
    console.log("No hay suficientes colores almacenados.");
} else {
    // OBTENCIÓN DE COMBINACIÓN RANDOM
    const mezclarColores = recuperacionColores.sort(() => Math.random() - 0.5).slice(0, 4);

    // Pintar los círculos con los colores seleccionados
    const secretCircles = document.getElementsByClassName("secret");
        Array.from(secretCircles).forEach((circle, index) => {
        circle.style.backgroundColor = mezclarColores[index];
    });
}

// TABLERO 

window.addEventListener("load", () => howManyRows());

let tablero = document.getElementById("juego");

const createRows = () => {
// ESTRUCTURA ROW
let rowDiv = document.createElement('div');
rowDiv.className = 'row';
let colDiv1 = document.createElement('div');
colDiv1.className = 'col-10 p-2 line';
let innerDiv1 = document.createElement('div');
innerDiv1.className = 'd-flex align-items-center justify-content-center flex-wrap';

//DOTS GAME
for (let i = 0; i < 4; i++) {
    let dotDiv1 = document.createElement('div');
    dotDiv1.className = 'dot1 m-1 bg-secondary';
    innerDiv1.appendChild(dotDiv1);
}
// ESTRUCTURA DOTS ANSWER
let answerDiv = document.createElement('div');
answerDiv.className = 'd-flex flex-column align-items-center justify-content-center answer';

let innerDotDiv = document.createElement('div');
innerDotDiv.className = 'd-flex flex-wrap';

// DOTS ANSWER
for (let j = 0; j < 4; j++) {
    let dotDiv2 = document.createElement('div');
    dotDiv2.className = 'dotA m-1 bg-secondary';
    innerDotDiv.appendChild(dotDiv2);
}

answerDiv.appendChild(innerDotDiv);
colDiv1.appendChild(innerDiv1);
innerDiv1.appendChild(answerDiv);


// CHECK ELEMENT
let colDiv2 = document.createElement('div');
colDiv2.className = 'col-2 p-1 mt-1';
let checkDiv = document.createElement('div');
checkDiv.className = 'check d-flex align-items-center justify-content-center';

let img = document.createElement('img');
img.src = '../img/8665934_square_check_icon.png';
img.className = 'dot';

checkDiv.appendChild(img);
colDiv2.appendChild(checkDiv);
rowDiv.appendChild(colDiv1);
rowDiv.appendChild(colDiv2);

// // Agrega "rowDiv" al body del documento
// document.body.appendChild(rowDiv);

}