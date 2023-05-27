//STORAGE JUGADOR

const saveJugador = () => {

  let jugador = document.getElementById("nombreJugador").value;

  sessionStorage.setItem("usuario", jugador);
  window.location.href = "../pages/winner.html";

  
      // // if (jugador.length !== 0) {
      // // sessionStorage.setItem("usuario", jugador);

      // // window.location.href = "../pages/winner.html";
      // // } else {
      // //     alert("Introduce un nombre");
      // // }
}