// Codigo principal del simulador

// Mensaje de bienvenida
alert("Bienvenido/a a el simulador de una tienda de ropa.");

// Inicio ciclo do while - Se encarga de agregar prendas al carrito
do {
    const opciones = ["talle", "categoria", "nombre", "precio"];
    let filtro = prompt(`Qué desea comprar? Puede filtrar por:\n- ${opciones.join("\n- ")}`).toLowerCase();

    while (!opciones.includes(filtro)) {
        filtro = prompt(`Filtro inválido, por favor ingrese uno correcto:\n- ${opciones.join("\n- ")}`).toLowerCase();
    }


    // Filtrar prendas según la opcion elegida en cada caso
    let prendasFiltradas = [];
    let valorSeleccionado = "";
    switch (filtro) {

        case "categoria":
            let categorias = [];

            productos.forEach((prenda) => {
                if (!categorias.includes(prenda.categoria)) {
                    categorias.push(prenda.categoria)
                }
            });

            let categoriaSeleccionada = prompt(`Ingrese la categoría que desea buscar, las opciones son:\n- ${categorias.join("\n- ")}`).toLowerCase();
            while (!categorias.includes(categoriaSeleccionada)) {
                categoriaSeleccionada = prompt(`La ${filtro} ingresada no es válida. Por favor ingrese una valida\n- ${categorias.join("\n- ")}`).toLowerCase();
            }

            valorSeleccionado = categoriaSeleccionada;

            prendasFiltradas = productos.filter((prenda) => prenda.categoria === categoriaSeleccionada)

            break;


        case "nombre":
            let nombres = [];

            productos.forEach((prenda) => {
                if (!nombres.includes(prenda.nombre)) {
                    nombres.push(prenda.nombre);
                }
            });

            const nombresOrdenados = ["remera", "remera sin mangas", "remera mangas largas", "buzo", "top", "pantalon", "short", "short bermuda"];
            nombres.sort((a, b) => {
                return nombresOrdenados.indexOf(a) - nombresOrdenados.indexOf(b);
            });

            let nombreSeleccionado = prompt(`Ingrese el nombre que desea buscar, las opciones son:\n- ${nombres.join("\n- ")}`).toLowerCase();
            while (!nombres.includes(nombreSeleccionado)) {
                nombreSeleccionado = prompt(`El ${filtro} ingresado no es válido. Por favor ingrese uno válido\n- ${nombres.join("\n- ")}`).toLowerCase();
            }

            valorSeleccionado = nombreSeleccionado;

            prendasFiltradas = productos.filter(prenda => prenda.nombre.toLowerCase().includes(nombreSeleccionado.toLowerCase()))

            break;

        case "talle":
            let talles = [];

            productos.forEach((prenda) => {
                if (!talles.includes(prenda.talle)) {
                    talles.push(prenda.talle);
                }
            });

            const tallesOrdenados = ["XS", "S", "M", "L", "XL"];
            talles.sort((a, b) => {
                return tallesOrdenados.indexOf(a) - tallesOrdenados.indexOf(b);
            });

            let talleSeleccionado = prompt(`Ingrese el talle que desea buscar, las opciones son:\n- ${talles.join("\n- ")}`).toUpperCase();
            while (!talles.includes(talleSeleccionado)) {
                talleSeleccionado = prompt(`El ${filtro} ingresado no es válido.Por favor ingrese uno valido\n- ${talles.join("\n- ")}`).toUpperCase();
            }

            valorSeleccionado = talleSeleccionado;

            prendasFiltradas = productos.filter((prenda) => prenda.talle === talleSeleccionado)

            break;

        case "precio":
            let precios = [];

            productos.forEach((prenda) => {
                if (!precios.includes(prenda.precio)) {
                    precios.push(prenda.precio);
                }
            });

            precios.sort((a, b) => {
                return a - b;
            });

            let precioSeleccionado = (Number(prompt(`Ingrese el precio que desea buscar, las opciones son:\n- $ ${precios.join("\n- $ ")}`)));
            while (!precios.includes(Number(precioSeleccionado))) {
                precioSeleccionado = (Number(prompt(`El ${filtro} ingresado no es válido.Por favor ingrese uno valido\n- $ ${precios.join("\n- $ ")}`)));
            }

            valorSeleccionado = precioSeleccionado;

            prendasFiltradas = productos.filter((prenda) => prenda.precio === Number(precioSeleccionado));


            break;

        default:
    }

    // Se verifica si hay elementos en el array "prendasFiltradas" para poder continuar
    if (prendasFiltradas.length > 0) {
        // Se van a mostrar solo las prendas que cumplan con el filtro
        let opcionesPrendas = prendasFiltradas.map((prenda) => prenda.nombre);

        let seleccion = prompt(`¿Qué prenda con ${filtro} ${valorSeleccionado} desea comprar? Las opciones son:\n- ${opcionesPrendas.join("\n- ")}`).toLowerCase();
        while (!opcionesPrendas.includes(seleccion)) {
            seleccion = prompt(`Opción inválida, por favor ingrese una válida:\n- ${opcionesPrendas.join("\n- ")} `);
        }
        
        // Luego de que el usuario seleccione una prenda se busca la prenda seleccionada en "prendasFiltradas" y esta se almacena en una variable "prendaSeleccionada"
        let prendaSeleccionada = prendasFiltradas.find((prenda) => prenda.nombre === seleccion);
        
        // Se muestra la informacion de la prendaSeleccionada y al final se consulta al usuario si desea agregarla a un carrito de compras.
        let decision = prompt(`Usted a seleccionado: \n -Nombre: ${prendaSeleccionada.nombre} \n -Categoria: ${prendaSeleccionada.categoria} \n -Talle: ${prendaSeleccionada.talle} \n -Precio: $${prendaSeleccionada.precio} \n ¿Desea agregar este producto al carrito ? Si / No`).toLowerCase();
        if (decision === "si") {
            carrito.push(prendaSeleccionada);
        }
    }
    // Fin o continuacion del ciclo do while segun la decision del usuario.
    decision = prompt(`${mostrarCarrito()} \n "Desea agregar mas prendas al carrito? Si / No`).toLowerCase();

} while (decision === "si")

// Fin del simulador
alert((`Su carrito de compras finalizo asi: \n ${mostrarCarrito()} \n`))
alert("GRACIAS POR USAR EL SIMULADOR")