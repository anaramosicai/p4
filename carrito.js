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