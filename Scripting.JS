// ====== FORMULARIO ======
const form = document.querySelector('.form-card');
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');

form.addEventListener('submit', (e) => {
    if (nombre.value.trim() === "" || edad.value.trim() === "") {
        e.preventDefault();
        alert("Por favor completa todos los campos");
        return;
    }

    if (edad.value <= 0) {
        e.preventDefault();
        alert("Edad inválida");
    }
});


// ====== PRODUCTO ======
const body = document.body;
const redBtn = document.querySelector('.red-btn');
const grayBtn = document.querySelector('.gray-btn');
const imageCard = document.getElementById('imageCard');
const cartButton = document.getElementById('cartButton');


// Imágenes online (para que SI funcionen)
const redCar = "img/graybemz.webp";
const grayCar = "img/redbemz.webp";

// Imagen inicial
imageCard.style.backgroundImage = `url(${grayCar})`;


// ====== CAMBIO A GRIS ======
grayBtn.addEventListener('click', () => {
    imageCard.style.backgroundImage = `url(${grayCar})`;
});


// ====== CAMBIO A ROJO ======
redBtn.addEventListener('click', () => {
    imageCard.style.backgroundImage = `url(${redCar})`;
});


// ====== BOTÓN CARRITO ======
cartButton.addEventListener('click', () => {
    cartButton.textContent = "✔ Agregado";
    cartButton.style.background = "green";

    setTimeout(() => {
        cartButton.textContent = "Agregar al carrito";
        cartButton.style.background = "";
    }, 2000);
});