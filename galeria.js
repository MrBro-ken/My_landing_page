function abrirImagen(imagen) {
  const visor = document.getElementById("visor");
  const imagenGrande = document.getElementById("imagenGrande");

  imagenGrande.src = imagen.src;
  visor.style.display = "flex";
}

document.getElementById("visor").onclick = function() {
  this.style.display = "none";
};