const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const boton = document.querySelectorAll('btn');

const objetoCarrito = {};

const AgregarCarrito = (e) => {
    console.log(e.target.dataset.fruta);

}

boton.forEach((e) => e.addEventListener('click', AgregarCarrito));
