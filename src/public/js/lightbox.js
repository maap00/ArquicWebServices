const imagenes = document.querySelectorAll(".card-img-top")
const imagenesLight = document.querySelector(".add-img")
const contenedorLight = document.querySelector(".imagen-light")

imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        aparecerImagen(imagen.getAttribute("src"))
    })
})

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle("show");
        imagenesLight.classList.toggle('showImage');
    }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle('showImage');

}