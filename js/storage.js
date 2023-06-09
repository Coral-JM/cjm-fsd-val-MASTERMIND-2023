//SESSION STORAGE NIVEL
const saveFacil = () => {
    sessionStorage.setItem("level", 10);
    window.location.href = "../pages/colorsL1.html";
}

const saveInter = () => {
    sessionStorage.setItem("level", 8);
    window.location.href = "../pages/colorsL2.html";
}

const saveDif = () => {
    sessionStorage.setItem("level", 6);
    window.location.href = "../pages/colorsL3.html";
}

//TRAER NIVELES
let nivel = sessionStorage.getItem("level");
console.log("¿Qué nivel es?", nivel)


//STORAGE JUGADOR

const saveJugador = () => {

    let jugador = document.getElementById("nombreJugador").value;

    sessionStorage.setItem("usuario", jugador);
    window.location.href = "../pages/winner.html";
    window.location.href = "../pages/looser.html";


}


//COLOR PICKER

//Pintado de los círculos por el usuario
const colorPicker = (inputId, circleId) => {
    let colorInput = document.getElementById(inputId);
    let circle = document.getElementById(circleId);

    colorInput.oninput = () => {
        circle.style.backgroundColor = colorInput.value;
        console.log("Color seleccionado:", colorInput.value);
    }
}

colorPicker("cp1", "circle1");
colorPicker("cp2", "circle2");
colorPicker("cp3", "circle3");
colorPicker("cp4", "circle4");
colorPicker("cp5", "circle5");
colorPicker("cp6", "circle6");


