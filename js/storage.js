//EXPOSICIÓN DEL JUGADOR EN LA PÁGINA WINNER
let mensajeWinner = document.getElementById("enhorabuena");
mensajeWinner.innerHTML = `${sessionStorage.getItem("usuario")}!`;
