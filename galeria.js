const imagenes = document.querySelectorAll(".galeria-grid img");
let indiceActual = 0;

function abrirImagen(imagen) {
  const visor = document.getElementById("visor");
  const imagenGrande = document.getElementById("imagenGrande");

  indiceActual = Array.from(imagenes).indexOf(imagen);
  imagenGrande.src = imagen.src;
  visor.style.display = "flex";
}

function cerrarVisor() {
  document.getElementById("visor").style.display = "none";
}

function cambiarImagen(direccion) {
  indiceActual += direccion;

  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }

  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }

  document.getElementById("imagenGrande").src =
    imagenes[indiceActual].src;
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") cambiarImagen(1);
  if (e.key === "ArrowLeft") cambiarImagen(-1);
  if (e.key === "Escape") cerrarVisor();
});
