const productos = [
    {
        'id': 1,
        'nombre': '2020',
        'img': './images/products/2020.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 2,
        'nombre': 'Vivo de Pastillas: Locura y Realidad',
        'img': './images/products/locura-y-realidad.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 3,
        'nombre': 'Paradojas',
        'img': './images/products/paradojas.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 4,
        'nombre': 'El Barrio en sus Puños',
        'img': './images/products/elbarrio.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 5,
        'nombre': '10 años',
        'img': './images/products/10.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 6,
        'nombre': 'Kermesse',
        'img': './images/products/Kermesse.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 7,
        'nombre': 'Desafios',
        'img': './images/products/desafios.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 8,
        'nombre': 'Vervsiones',
        'img': './images/products/versiones.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 9,
        'nombre': 'Crisis',
        'img': './images/products/crisis.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 10,
        'nombre': 'Las Pastillas del Abuelo',
        'img': './images/products/discorojo.jpg',
        'precio': 1500,
        'cantidad': 1        
    },

    {
        'id': 11,
        'nombre': 'Por Colectora',
        'img': './images/products/por-colectora.jpg',
        'precio': 1500,
        'cantidad': 1        
    },
    
]

const carrito = [];

let total = 0;

function renderizarProctuctos () {

    let tienda = document.getElementById('tienda')

    productos.forEach((prod) => {
        
        let productoHTML = `

        <div class="card" style="width: 18rem;">
            <img src= "${prod.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${prod.nombre} </h5>
                <p class="card-text"></p>
                <p>$${prod.precio}</p>
                <a href="#" class="btn btn-primary" onClick="agregarProductoAlCarrito(${prod.id})">Agregar al carrito</a>
            </div>
        </div>
        `

        tienda.innerHTML += productoHTML 
    });
}

renderizarProctuctos();

function agregarProductoAlCarrito(id) {

    let producto = productos.find(producto => producto.id == id);

    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);

        console.log(carrito)
    }
}

function renderizarCarrito() {
    let carritoHTML = document.getElementById('carrito')

    html = '';

    carrito.forEach((producto, id) => {
        html += `
        
        `
    })
}

MINUTO 27