let contenedorCarrito = document.querySelector("#pagina-carrito");
let contenedorTotal = document.querySelector("#carrito-total2");


let carritoLS = JSON.parse(localStorage.getItem("carrito"))  || [];


let total = 0;

carritoLS.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("pagina-carrito-producto");
    div.innerHTML = `
            <img src="${producto.img}" alt="">
            <h3>${producto.titulo}</h3>
            <p>$${producto.precio.toLocaleString()}</p>
            <p>${producto.cantidad}</p>
            <p>$${producto.cantidad * producto.precio}</p>
            `;
    contenedorCarrito.append(div);


    total += producto.cantidad * producto.precio;
});

contenedorTotal.innerHTML = `
    <p>$${total.toLocaleString()}</p>
`;