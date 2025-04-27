const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
];

do {
    opcion = prompt(
        "Bienvenido que metodo gusta checar:\n1. forEach\n2. map + includes\n3. map\n4. filter\n5. slice\n6. soft\n7. reverse\n8. SALIR"
    );
    realizarOperacion(opcion);
}
while (opcion !== "8");



function realizarOperacion(opcion) {
    switch (opcion) {
        case "1":
            for (let i = 0; i < productos.length; i++) {
                const producto = productos[i];
                console.log("Producto: " + producto.nombre + " Precio: " + producto.precio);
            }
            break;
        case "2":
            // Parte 1: Crear el array de nombres de productos
            const productosDisponibles = productos.map(producto => producto.nombre);
            console.log("Productos disponibles:", productosDisponibles);
            // Parte 2: Verificar si un producto buscado está disponible
            const productoBuscado = prompt("Escriba el producto que desea buscar");
            if (productosDisponibles.includes(productoBuscado)) {
                console.log("El producto: " + productoBuscado + " está disponible.");
            } else {
                console.log("El producto: " + productoBuscado + " no está disponible.");
            }
            break;
        case "3":
            const productosConDescuento = productos.map(producto => {
                const descuento = producto.precio * 0.10;
                const precioConDescuento = producto.precio - descuento;
                return {
                    precio: precioConDescuento
                };
            });
            console.log("Productos con descuento del 10%: " + productosConDescuento);
            break;
        case "4":
            ///No logre realizarlo correctamente //actualizacion 27-abril-2025 ya pude jaja
            const productosBaratos = productos.filter(producto => producto.precio < 100);
            console.log("Productos con precio menor a $100:");
            productosBaratos.forEach(producto => {
                console.log("Nombre:" + producto.nombre + " Precio: " + producto.precio);
            });
            break;
        case "5":
            const primerosDosProductos = productos.slice(0, 2);
            for (let i = 0; i < primerosDosProductos.length; i++) {
                const producto = primerosDosProductos[i];
                console.log("Producto: " + producto.nombre + " Precio: " + producto.precio);
            }
            break;
        case "6":
            const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
            for (let i = 0; i < productosOrdenados.length; i++) {
                const producto = productosOrdenados[i];
                console.log("Producto: " + producto.nombre + " Precio: " + producto.precio);
            }
            break;
        case "7":
            const productosInvertidos = [...productos].reverse();
            console.log("Productos en orden inverso:");
            productosInvertidos.forEach(producto => {
                console.log("Nombre: " + producto.nombre + " Precio: " + producto.precio);
            });
            break;
        case "8":

            break;

        default:
            break;
    }
}
