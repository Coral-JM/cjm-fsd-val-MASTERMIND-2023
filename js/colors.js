// Pintado de los círculos por el usuario
const colorPicker = (inputId, circleId) => {
  let colorInput = document.getElementById(inputId);
  let circle = document.getElementById(circleId);

  colorInput.oninput = () => {
      circle.style.backgroundColor = colorInput.value;
      console.log("Color seleccionado:", colorInput.value);
  }
}

let nivel = sessionStorage.getItem("level");

colorPicker("cp1", "circle1");
colorPicker("cp2", "circle2");
colorPicker("cp3", "circle3");
colorPicker("cp4", "circle4");
// Se pinta el quinto color solo si el nivel es intermedio o difícil.
if(nivel == 8 || nivel == 6) {
  colorPicker("cp5", "circle5");
}
// Se pinta el sexto color solo si el nivel es difícil.
if(nivel == 6) {
  colorPicker("cp6", "circle6");
}


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