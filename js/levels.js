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