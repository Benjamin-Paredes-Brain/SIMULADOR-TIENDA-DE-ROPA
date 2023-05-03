// Carrito de compras

const carrito = [];

function mostrarCarrito() {
    let mensaje = `Carrito de compras:\n`;
    let totalCarrito = 0;
    carrito.forEach(function(item) {
      mensaje += `- ${item.nombre} ($${item.precio})\n`;
      totalCarrito += item.precio;
    });
    mensaje += `Total: $${totalCarrito}`;
    return mensaje;
  }