'use strict';

/*
 *  HWANG, IN YOUNG
 */

/*let productos = [
    {
        id: 1,
        nombre: 'Producto',
        descripcion: 'Descripción del producto',
        precio: 0,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'Nombre de la categoría',
    },
];
*/

let d = document;

// <div id="productos"></div>

let idProductos = document.querySelector('main');

let div = d.createElement('div');
div.setAttribute('id','productos');

idProductos.appendChild(div);

let Productos = d.getElementById('productos');
let Carrito = d.getElementById('minicarrito');


let aProductos = [];
let aCarrito = [];

//producto

function producto (id, nombre, precio, descripcion, img, categoria) {

    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.img = img;
    this.categoria = categoria;
}

function agregarProductos () {

    let img;

    img = d.createElement('img');
    img.src = 'img/colorful_tattoo.jpg';
    img.alt = 'Colorful Tatoo Tint';
    
    aProductos.push (
        new producto (
            '#1',
            'Colorful Tattoo Tint',
            10000,
            'Tinta d elabios con efecto semi-velvet que dura como su fuera un tattoo',
            img,
            'Labios'
        )
    );

    img = d.createElement('img');
    img.src = 'img/colorful_vivid.jpg';
    img.alt = 'Colorful Vivid Tint';
    aProductos.push(
        new producto(
            '#2',
            'Colorful Vivid Tint',
            9000,
            'Tinta de labios con efecto semi-velvet que dura como su fuera un tattoo',
            img,
            'Labios'
        )
    );

    img = d.createElement('img');
    img.src = 'img/darling_tint.jpg';
    img.alt = 'Dear Darling Tint';
    aProductos.push(
        new producto(
            '#3',
            'Dear Darling Tint',
            8000,
            'Tinta de labios con efecto semi-velvet que dura como su fuera un tattoo',
            img,
            'Labios'
        )
    );

    img = d.createElement('img');
    img.src = 'img/heart_pop_eyeshadow.jpg';
    img.alt = 'Heart Pop Eyeshadow';
    
    aProductos.push (
        new producto (
            '#4',
            'Heart Pop Eyeshadow',
            10000,
            'Sombra de ojos con forma de corazon',
            img,
            'Ojos'
        )
    );

    img = d.createElement('img');
    img.src = 'img/rosewine_sub2_1.jpg';
    img.alt = 'Rose Wine Eyeshadow';
    aProductos.push(
        new producto(
            '#5',
            'Rose Wine Eyeshadow',
            17000,
            'Paleta de sombra de ojos en rose wine',
            img,
            'Ojos'
        )
    );

    img = d.createElement('img');
    img.src = 'img/_1_1__lash_perm_volume_fix_mascara_main2.jpg';
    img.alt = 'Volume Fix Mascara';
    aProductos.push(
        new producto(
            '#6',
            'Volume Fix Mascara',
            13000,
            'Mascara de Pestañas Volumizadoras',
            img,
            'Ojos'
        )
    );

    img = d.createElement('img');
    img.src = 'img/650011703__healthy_tone_up_calamine_cushion.jpg';
    img.alt = 'Healthy Tone Up Cushion';
    aProductos.push(
        new producto(
            '#7',
            'Healthy Tone Up Cushion',
            19000,
            'Base Liquida Cushion para el rostro que iluminiza el rostro',
            img,
            'Rostro'
        )
    );

    img = d.createElement('img');
    img.src = 'img/double_lasting_serum_skin_01.jpg';
    img.alt = 'Double Lasting Serum Skin';
    aProductos.push(
        new producto(
            '#8',
            'Double Lasting Serum Skin',
            20000,
            'Base Liquida Serum para el rostro',
            img,
            'Rostro'
        )
    );

    img = d.createElement('img');
    img.src = 'img/sebumsoak_pore_primer_main1.jpg';
    img.alt = 'Sebum Soak Pore Primer';
    aProductos.push(
        new producto(
            '#9',
            'Sebum Soak Pore Primer',
            20000,
            'Primer reductor de poros',
            img,
            'Rostro'
        )
    );
}

agregarProductos ();


function crearProducto () {

    /* <div>
     *   <img/>
     *   <div>
     *      <span>Id</span>
     *      <h3>Nombre</h3>
     *     <p>Descripcion</p>
     *      <p>Precio: <span>$</span></p>
     *     <p>Categoria</p>
     *      <button>Agregar</button>
     *    </div>
     * </div>
     */

    let divPorducto, img, divDetalle, span, h3, pDescricpcion, pPrecio, pCategoria, button;

    for ( let i = 0; i < aProductos.length; i++) {

        divPorducto = d.createElement('div');
        
        img = aProductos[i].img;

        divDetalle = d.createElement('div');

        span = d.createElement('span');
        span.innerHTML = aProductos[i].id;
        span.style.display = 'none';

        h3 = d.createElement('h3');
        h3.innerHTML = aProductos[i].nombre;

        pDescricpcion = d.createElement('p');
        pDescricpcion.innerHTML = aProductos[i].descripcion;
        pDescricpcion.style.fontSize = '1.5em';

        pPrecio = d.createElement('p');
        pPrecio.innerHTML = 'Precio: <span>$' + aProductos[i].precio;
        

        pCategoria = d.createElement('p');
        pCategoria.innerHTML = aProductos[i].categoria;
        pCategoria.style.fontSize = '1.5em';

        button = d.createElement('button');
        button.innerHTML = 'Agregar';
        button.onclick = function () {

            agregarAlCarrito(this.parentNode.firstElementChild.innerHTML);
        }

        divDetalle.appendChild(span);
        divDetalle.appendChild(h3);
        divDetalle.appendChild(pDescricpcion);
        divDetalle.appendChild(pPrecio);
        divDetalle.appendChild(pCategoria);
        divDetalle.appendChild(button);

        divPorducto.appendChild(img);
        divPorducto.appendChild(divDetalle);

        Productos.appendChild(divPorducto);
    }
}

crearProducto ();


function buscarProducto (id) {

    for (let i = 0; i < aProductos.length; i++) {

        if (aProductos[i].id == id) {

            return aProductos[i];
        }
    }
    return 0;
}

function agregarAlCarrito (id) {

    let i = aProductos.indexOf(buscarProducto(id));

    let producto = aProductos[i];

    aCarrito.push(producto);

    Actualizar();
}

function totalCarrito () {

    let total = 0;

    for (let i = 0; i < aCarrito.length; i++) {

        total += aCarrito[i].precio;
    }
    return total;
}

function Actualizar () {

    Carrito.firstElementChild.firstElementChild.innerHTML = aCarrito.length;
    Carrito.children[1].firstElementChild.innerHTML = totalCarrito();
}

Actualizar();

