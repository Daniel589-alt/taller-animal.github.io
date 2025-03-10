// Seleccionamos los elementos del DOM
const themeButton = document.getElementById("toggle-theme");
const infoButton = document.getElementById("show-info");
const extraInfo = document.getElementById("extra-info");

// Verificamos que los elementos existen antes de agregar eventos
if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

if (infoButton && extraInfo) {
    infoButton.addEventListener("click", () => {
        extraInfo.classList.toggle("hidden");
    });
}
