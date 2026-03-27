# Práctica 4: Página web estática

## 1. Introducción
En esta práctica diseñaremos 1 página web para la práctica 3, realizada anteriormente en la asignatura.

## 2. Objetivos
- Afianzar los conocimientos de HTML+CSS vistos en clase (junto con la documentación de Mozilla).
- Crear una web que constará de una página principal y 3 páginas interiores interconectadas.
- Estas páginas deberán contener los siguientes elementos HTML:
  - Títulos
  - Párrafos
  - Tablas
  - Multimedia
  - Formularios Web

- Estilizar la web usando CSS.
- La web deberá estar publicada en Github pages y estar disponible en una URL similar a: `https://<CUENTA-GIT-ALUMNO>.github.io/p4/`

## 3. Recordatorio del los atributos y funcionamiento

| Carrito | Línea de Carrito |
|----------|-----------|
|IdCarrito|        IdLineaCarrito        |
|IdUsuario|             IdCarrito        |
|Correo del usuario|    idArticulo       |
|Total precio|      Precio Unitario      |
||              Número de unidades       |
||           Coste línea de articulo     |

`Simplificación:` cada carrito solo puede contener un único producto (no existe lista de líneas).

## 4. Desarrollo de la práctica

<details>
<summary><strong>4.1. Diseño de la prágina principal en VSC</strong></summary>
Comenzaremos con el diseño de la página principal de la página web en editor de código fuente Visual Studio Code.

Para empezar usé/pegué el código inicial que se nos da en la página web de la asignatura:
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Título obligatorio</title>
    <style>/* Tema 4: CSS */</style>
    <script>/* Tema 5: JavaScript */</script>
  </head>
  <body>
    <!-- Este tema -->
  </body>
</html>
```

### Construcción del \<body>
En esta sección explico cómo fui creando la estructura principal de mi proyecto web Carrito de Michis, incorporando progresivamente cada elemento HTML requerido: títulos, párrafos, tablas, multimedia y formularios.

Puse un título añadiendo un \<header> de la siguiente manera:
```html
<header class="cabecera">
        <h1 class="titulo"> ⊹₊˚‧︵‿₊୨ᰔ୧₊‿︵‧˚₊⊹ <br> Carrito De Michis <br> . ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁. </h1>
    </header>
```

Y, también añadí el elemento decorativo deslizante:
```html
<img src="https://png.pngtree.com/png-vector/20241012/ourmid/pngtree-cat-peeking-from-frame-png-image_14067902.png"
        class="michi-flotante" alt="Michi decorativo">
```

Para las secciones principales visibles: menú, artículos y contenido lateral organicé la página usando div, aside, section y article dentro de una rejilla:
- Menú lateral
```html
<aside class="caja-menu">
    <h3>Menú</h3>
    <p><a href="ofertas.html" class="enlace-ofertas">Ver Ofertas</a></p>
    <p>Filtrar por raza</p>
</aside>
```
- Mensaje de bienvenida
```html
<article class="caja-adopta">
    <h2>Adopta a tu nuevo amigo</h2>
    <p>Bienvenidos a la tienda de michis de internet.</p>
</article>
```
- Acceso al carrito
```html
<a href="compramichis.html" style="text-decoration: none; color: inherit;">
    <aside class="caja-carrito">
        <h3>Tu Carrito 🛒</h3>
        <p>Ver detalles</p>
    </aside>
</a>
```

Para cumplir la parte de multimedia, incluí un mapa interactivo de Google Maps usando <iframe>:
```html
        <section class="caja-info">
            <h4>Nuestra Ubicación</h4>
            <p>"Pero no me gusta comprar online", no tienes escusa, ven a visitarnos: </p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.7429003175021!2d-3.7063982318454887!3d40.41328962513928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262ec8ae51bd%3A0x230a1b3f69e74cc8!2sLa%20Gatoteca!5e0!3m2!1ses!2sus!4v1774568299892!5m2!1ses!2sus"
                width="160" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <p>¡No te arrepentirás!
                <br><br>
                𝑴𝒆𝒐𝒘. ฅ(•- •マ
                </br></br>
            </p>
        </section>

        <section class="caja-anuncio">
            <h4>¡Publicidad!</h4>
            <p>Hay que ganarse el pan de alguna forma</p>
            <img src="https://media1.tenor.com/m/RLthQ6DcOSQAAAAC/cat-dog-roblox-dance-el-gato-y-papu-perro-bailando.gif"
                alt="Michi bailando" width="160" height="350">
            <p>ฅ≽(•⩊ •マ≼</p>
        </section>
```

Para mostrar los michis disponibles utilicé una tabla HTML completa con <thead> y <tbody>:
```html
<section class="seccion-tabla">
    <table class="tabla-michis">
        <thead>
            <tr>
                <th>Michi</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acción</th>
            </tr>
        </thead>
```

Cada fila contiene imagen, descripción y selector de cantidad:
```html
<tr>
    <td><img src="https://i.pinimg.com/...jpg"
             alt="Angi</strong><br>Aunque no lo parezca, es mimoso.</td>

    <td>10.00€</td>

    <td>
        <select>
            <option>1 unidad</option>
            <option>2 unidades</option>
        </select>
    </td>

    <td><button class="boton-add">Añadir ฅ^>⩊<^ฅ</button></td>
</tr>
```

Finalmente, añadí un pie de página sencillo con un mensaje personalizado:
```html
    <footer class="pie">
        <p>&copy; 2026 Michis Store - Hecho con ♡ para amantes de los michis</p>
    </footer>
```

</details>


<details>
<summary><strong>4.2. Otras 3 o 4 páginas más similares (ya veré)</strong></summary>

</details>

<details>
<summary><strong>4.3. Implementación lógica de "guardado en el carrito"</strong></summary>
Para lograr esto en una página web estática (sin usar bases de datos o servidores), tenemos un pequeño problema, pues cuando cambias de una página HTML a otra, el navegador "olvida" lo que pasó en la anterior, es decir, nuestro "Añadir al carrito".

Por lo tanto, usaremos localStorage. Se trata de un pequeño almacén de datos en el navegador que permite que mi webcarrito.html guarde un producto y compramichis.html lo lea.

Entonces, para que el código sepa qué michi está añadiendo el cliente, necesitamos que los botones tengan la "información". Por lo tanot, debo de añadir atributos data- a los botones:
```html
<td>
    <button class="boton-add" 
            data-nombre="Angry Michi" 
            data-precio="10.00">
        Añadir ฅ^>⩊<^ฅ
    </button>
</td>
```

Además añadiremos un contador de los añadidos en Tu Carrito:
```hmtl
<a href="compramichis.html" style="text-decoration: none; color: inherit;">
    <aside class="caja-carrito">
        <h3>Tu Carrito 🛒</h3>
        <p id="cuenta-carrito">0 michis</p> <small>Ver detalles</small>
    </aside>
</a>
```

Crearemos un nuevo archivo llamado carrito.js y pegaremos este código. Este script se encargará de guardar los datos:
```js
function actualizarContador() {
    const contadorElemento = document.getElementById('cuenta-carrito');
    if (contadorElemento) {
        const carrito = JSON.parse(localStorage.getItem('misMichis')) || [];
        const totalUnidades = carrito.reduce((acc, item) => acc + parseInt(item.cantidad), 0);
        contadorElemento.textContent = `${totalUnidades} michis`;
    }
}

document.querySelectorAll('.boton-add').forEach(boton => {
    boton.addEventListener('click', () => {
        const nombre = boton.getAttribute('data-nombre');
        const precio = boton.getAttribute('data-precio');
        
        // Buscamos el select en la celda anterior (Cantidad)
        const fila = boton.closest('tr');
        let cantidad = 1;
        if (fila) {
            const select = fila.querySelector('select');
            if (select) {
                // Extraemos el número de "1 unidad" o "2 unidades"
                cantidad = parseInt(select.value);
            }
        }

        let carrito = JSON.parse(localStorage.getItem('misMichis')) || [];
        const index = carrito.findIndex(item => item.nombre === nombre);

        if (index !== -1) {
            carrito[index].cantidad = parseInt(carrito[index].cantidad) + cantidad;
        } else {
            carrito.push({ nombre, precio, cantidad });
        }

        localStorage.setItem('misMichis', JSON.stringify(carrito));
        actualizarContador();
        alert(`¡Añadido(s) ${cantidad} ${nombre}(s)! 🐾`);
    });
});

document.addEventListener('DOMContentLoaded', actualizarContador);
```

En compramichis.html, vamos a modificar la lista para que sea dinámica. Por lo que primero, debemos darle un id al contenedor en el HTML:
```html
<article class="caja-adopta">
    <h3>Resumen de tu pedido</h3>
    <ul id="lista-dinamica" class="lista-resumen">
        </ul>
    </article>
```

Y para que este funcione añadimos:
```js
<script>
    const lista = document.getElementById('lista-dinamica');
    const datos = JSON.parse(localStorage.getItem('misMichis')) || [];

    if (datos.length === 0) {
        lista.innerHTML = "<li>El carrito está vacío :(</li>";
    } else {
        datos.forEach(michi => {
            const li = document.createElement('li');
            // Ahora mostramos también la cantidad guardada
            li.textContent = `${michi.nombre} x${michi.cantidad} - ${michi.precio * michi.cantidad}€`;
            lista.appendChild(li);
        });
    }
</script>
```

Ahora, debemos vincular el JS en todas las páginas para que los botones funcionen en cualquier sitio. Añadiremos esta línea justo antes de cerrar el \</body> en webcarrito.html y ofertas.html:
```html
<script src="carrito.js"></script>
```

Finalmente debemos limpiar esta "memoria" en algún momento.

En la página pago.html, cuando el usuario haga clic en "Finalizar Compra" o "Cancelar", queremos que el carrito se vacíe. Así que añadiremos esto a los botones o al formulario de pago.html (en \<script>):
```js
<script>
    // Limpiar carrito al finalizar (comprar)
    document.querySelector('.formulario-pago').addEventListener('submit', () => {
        localStorage.removeItem('misMichis');
    });

    // Limpiar carrito al cancelar
    document.querySelector('.boton-cancelar').addEventListener('click', () => {
        localStorage.removeItem('misMichis');
    });
</script>
```
</details>
