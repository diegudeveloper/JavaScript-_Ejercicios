const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const boton = document.querySelectorAll('.card .btn');

//console.log(boton);

const objetoCarrito = {};

const agregarCarrito = (e) => {
    //console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    };

    if(objetoCarrito.hasOwnProperty(producto.id)) {
        producto.cantidad = objetoCarrito[producto.id].cantidad + 1;
    }

    objetoCarrito[producto.titulo] = producto;
    //console.log(objetoCarrito);

    pintarCarrito();
}

boton.forEach((e) => e.addEventListener('click', agregarCarrito));

const pintarCarrito = () => {

    carrito.textContent = "";

    Object.values(objetoCarrito).forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.rounded-pill').textContent = item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);
}

