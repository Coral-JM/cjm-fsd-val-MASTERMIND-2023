const pintarDotConColoresDeSessionStorage = () => {
    const coloresGuardados = JSON.parse(sessionStorage.getItem("seleccionColores"));
    const dotDiv1 = document.getElementById("dot1");
  
    if (coloresGuardados && coloresGuardados.length > 0 && dotDiv1) {
      let index = 0;
  
      dotDiv1.addEventListener("click", () => {
        const color = coloresGuardados[index] || "transparent";
        dotDiv1.style.backgroundColor = color;
        index = (index + 1) % coloresGuardados.length; // Avanza al siguiente color circularmente
      });
    }
  };
  
  pintarDotConColoresDeSessionStorage();