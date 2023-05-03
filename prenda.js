// Funcion constructora de prendas de ropa

class prenda {
    constructor(nombre, categoria, talle, precio) {
        this.nombre = nombre.toLowerCase();
        this.categoria = categoria.toLowerCase();
        this.talle = talle.toUpperCase();
        this.precio = Number(precio);
    }
}

// Array con las prendas construidas de la funcion constructora
const productos = [];
productos.push(new prenda("pantalon", "cargo", "XL", 200));
productos.push(new prenda("short bermuda", "liso", "S", 100));
productos.push(new prenda("remera", "oversize", "L", 150));
productos.push(new prenda("buzo", "oversize", "M", 400));
productos.push(new prenda("remera sin mangas", "fit", "S", 50));
productos.push(new prenda("top", "liso", "XS", 80));
productos.push(new prenda("remera mangas largas", "estampada", "XL", 100));
productos.push(new prenda("short", "deportivo", "M", 120));