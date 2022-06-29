let carrito
const carritoLS = JSON.parse(localStorage.getItem('carrito'))
let carritoHTML = document.getElementById('carrito')
let total = 0;

function renderizarProctuctos () {

    let tienda = document.getElementById('tienda')

    productos.forEach((prod) => {
        
        let productoHTML = `
            <div class="col-12 col-md-4 mb-5 d-flex justify-content-center productos">
            <div class="card text-dark productos-card" style="width: 18rem;">
            <img class="card-img-top productos-img" src="${prod.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title"> ${prod.nombre} </h5>
                    <p class="card-text"></p>
                    <p>$${prod.precio}</p>
                    <button class="btn btn-primary" onClick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
                </div>
            </div>
            </div>
        `
        
        tienda.innerHTML += productoHTML
    });
}

renderizarProctuctos();

function agregarAlCarrito(id) {

    let producto = productos.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderizarCarrito();
}



function renderizarCarrito() {
    let carritoHTML = document.getElementById('carrito')

    html = '';

    carrito.forEach((producto, id) => {
        html += `
        <div class="col-12 d-flex justify-content-center productos">
            <div class="card text-dark productos-card" style="width: 18rem;">
                <img class="card-img-top productos-img" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p>$${producto.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button class="btn btn-primary" onClick="eliminarDelCarrito(${id})">Eliminar</button>
                    <button class="btn btn-success" onClick="aumentarLaCantidad(${id})">+</button>
                    <button class="btn btn-danger" onClick="bajarLaCantidad(${id})"> - </button>
                </div>
            </div>
        </div>
        `
    })

    carritoHTML.innerHTML = html

    // calcularTotal();
}

function eliminarDelCarrito(id) {

    let eliminar = carrito.indexOf(id)

    if (eliminar) {
        carrito.splice(id, 1)
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    
    renderizarCarrito()
}

function resetearCarrito() {

}

function aumentarLaCantidad(id) {
    
    let aumentar = carrito[id]

    if (aumentar) {
        aumentar.cantidad++;
    } 

    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderizarCarrito()

}

function bajarLaCantidad(id) {
    carrito[id].cantidad--;

    if (carrito[id].cantidad == 0) {
        carrito.splice(id, 1)
    }
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderizarCarrito()
}

if (carritoLS) {
    carrito = carritoLS
} else {
    carrito = []
}

