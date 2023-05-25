
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
        console.log(coloresGuardados);
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
        console.log("No hay suficientes colores almacenados");
    } else {
        // OBTENCIÓN DE COMBINACIÓN RANDOM
        const mezclarColores = recuperacionColores.sort(() => Math.random() - 0.5).slice(0, 4);

        // Pintar los círculos con los colores seleccionados
        const secretCircles = document.getElementsByClassName("secret");
            Array.from(secretCircles).forEach((circle, index) => {
            circle.style.backgroundColor = mezclarColores[index];
        });
}

///////////////////////////////////////////////////////////////////////////////

// TABLERO

// FILA PRINCIPAL TABLERO

createRow = () => {
let rowDiv = document.createElement('div');
    rowDiv.className = 'row rowprincipal';
let colDiv = document.createElement('div');
    colDiv.className = 'col-10 p-2 line';
let innerDiv = document.createElement('div');
    innerDiv.className = 'rowDots d-flex align-items-center justify-content-center flex-wrap';

    // DOTS
    for (let i = 0; i < 4; i++) {
        let dotDiv1 = document.createElement('div');
            dotDiv1.className = 'dot1';
            innerDiv.appendChild(dotDiv1);
            dotDiv1.id = 'dot1';
    }

let answerDiv = document.createElement('div');
    answerDiv.className = 'd-flex flex-column align-items-center justify-content-center answer';

    // DOTS ANSWER
let innerAnswerDiv = document.createElement('div');
    innerAnswerDiv.className = 'd-flex flex-wrap';

    for (let i = 0; i < 4; i++) {
        let dotADiv = document.createElement('div');
            dotADiv.className = 'dotA m-1';
            innerAnswerDiv.appendChild(dotADiv);
    }

    answerDiv.appendChild(innerAnswerDiv);
    innerDiv.appendChild(answerDiv);
    colDiv.appendChild(innerDiv);
    rowDiv.appendChild(colDiv);

    // BTN CHECK
let colDiv2 = document.createElement('div');
    colDiv2.className = 'col-2 p-1 mt-1';
let checkDiv = document.createElement('div');
    checkDiv.className = 'check d-flex align-items-center justify-content-center';
let img = document.createElement('img');
    img.src = '../img/8665934_square_check_icon.png';
    img.className = 'dot';

    checkDiv.appendChild(img);
    colDiv2.appendChild(checkDiv);
    rowDiv.appendChild(colDiv2);

    return rowDiv;
}

document.addEventListener('DOMContentLoaded', () => {
    let juegoDiv = document.getElementById('juego');
    let obtenerRows = createRow();
        juegoDiv.appendChild(obtenerRows);
});

///////////////////////////////////////////////////////////////////////////////

//FUNCIÓN SUMA DE FILAS POR NIVEL

let contador = 1;

const rows = () => {

    let checkDivs = document.querySelectorAll('.check');
    let lastCheckDiv = checkDivs[checkDivs.length - 1];
    let lastImg = lastCheckDiv.querySelector('img');

    if (contador < nivel && lastImg && contador === checkDivs.length) {
        lastImg.removeEventListener('click', rows);
    
        let juegoDiv = document.getElementById('juego');
        let newRow = createRow();
            juegoDiv.appendChild(newRow);
    
        contador++;
    
        let newCheckDiv = newRow.querySelector('.check');
        let newImg = newCheckDiv.querySelector('img');
            newImg.addEventListener('click', rows);

        console.log('Clicks disponibles: ' + (nivel - contador));
    
    pintarDot1();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let img = document.querySelector('.check img');
        img.addEventListener('click', rows);
});

// PINTAR LOS DOTS DEL JUEGO CON LOS COLORES DEL ARRAY

const pintarDot1 = () => {
    let coloresGuardados = JSON.parse(sessionStorage.getItem("seleccionColores"));
    let dots = document.getElementsByClassName('dot1');

    if (coloresGuardados && coloresGuardados.length > 0) {
        Array.from(dots).forEach((dot) => {
        let currentIndex = 0;
        dot.addEventListener('click', () => {
            const nextColorIndex = (currentIndex + 1) % coloresGuardados.length;
            dot.style.backgroundColor = coloresGuardados[nextColorIndex] || "transparent";
            currentIndex = nextColorIndex;
        });
    });
    }
};

document.addEventListener("DOMContentLoaded", pintarDot1);



// EXPOSICIÓN DEL JUGADOR EN LA PÁGINA WINNER
let mensajeWinner = document.getElementById("enhorabuena");
mensajeWinner.innerHTML = `${sessionStorage.getItem("usuario")}!`;
