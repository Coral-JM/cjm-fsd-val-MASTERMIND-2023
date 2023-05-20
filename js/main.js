
//STORAGE JUGADOR

const saveJugador = () => {

    let jugador = document.getElementById("nombreJugador").value;
    console.log(jugador);

    sessionStorage.setItem("usuario", jugador);
    window.location.href = "../winner.html";
        // if (jugador.length !== 0) {
        // sessionStorage.setItem("usuario", jugador);
        // console.log("Nombre del jugador" + jugador);
        // window.location.href = "../winner.html";
        // } else {
        //     alert("Introduce un nombre");
        // }
}



//COLORPICKER

// La función colorPicker tiene dos parámetros (inputId y CircleId), éstos 
// son los que recogen el valor del ID. 
// Se declaran entonces las variables (colorInput y circle).
// getElementById obtendrá los elementos del DOM (las variables) 
// y las añade a los parámetros.
// "colorInput" se refiere al elemento de entrada y "circle" 
//se refiere al elemento de círculo correspondiente a los IDs proporcionados.


// function colorPicker(inputId, circleId) {
//     let colorInput = document.getElementById(inputId);
//     let circle = document.getElementById(circleId);

//     colorInput.oninput = () => {
//         circle.style.backgroundColor = colorInput.value;
//     };
//     }
// colorPicker("cp1", "circle1");
// colorPicker("cp2", "circle2");
// colorPicker("cp3", "circle3");
// colorPicker("cp4", "circle4");
