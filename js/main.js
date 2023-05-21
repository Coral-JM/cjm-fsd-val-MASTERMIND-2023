
//STORAGE JUGADOR

const saveJugador = () => {

    let jugador = document.getElementById("nombreJugador").value;

    sessionStorage.setItem("usuario", jugador);
    window.location.href = "../pages/winner.html";
        // if (jugador.length !== 0) {
        // sessionStorage.setItem("usuario", jugador);

        // window.location.href = "../pages/winner.html";
        // } else {
        //     alert("Introduce un nombre");
        // }
}



//COLORPICKER

// ColorPicker tiene dos parámetros (inputId y CircleId), éstos 
// son los que recogen el valor del ID. Se declaran entonces las variables (colorInput y circle).

function colorPicker(inputId, circleId, colorsArray) {
    let colorInput = document.getElementById(inputId);
    let circle = document.getElementById(circleId);

    colorInput.oninput = () => {
        circle.style.backgroundColor = colorInput.value;
        console.log("Color seleccionado:", colorInput.value);
        //Convertir en Array los colores seleccionados por el usuario
        colorsArray.push(colorInput.value);
        console.log("Colores almacenados:", colorsArray);
        //Almacenaje de los colores del usuario en sessionStorage y convertidos en un string
        sessionStorage.setItem("almacenColores", JSON.stringify(colorsArray));
        console.log("Colores almacenados en sessionStorage: ", colorsArray);
    };
}

let seleccionColores = [];

//Guardado y converversión del string a array de los colores almacenados en el sessionStorage
const storageColores = sessionStorage.getItem("almacenColores");
    if (storageColores) {
        almacenColores = JSON.parse(storageColores);
        console.log("Colores convertidos del sessionStorage:", almacenColores);
    }


    
//String y arrays de los colores hexadecimales
colorPicker("cp1", "circle1", seleccionColores);
colorPicker("cp2", "circle2", seleccionColores);
colorPicker("cp3", "circle3", seleccionColores);
colorPicker("cp4", "circle4", seleccionColores);
colorPicker("cp5", "circle5", seleccionColores);
colorPicker("cp6", "circle6", seleccionColores);


