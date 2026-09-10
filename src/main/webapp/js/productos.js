$(document).ready(function () {

    let productos = [
        {
            codigo: "V001",
            nombre: "RB19",
            escuderia: "Red Bull Racing",
            corredor: "Max Verstappen",
            anio: 2023,
            imagen: "img/rb19.jpg"
        },
        {
            codigo: "V002",
            nombre: "SF-23",
            escuderia: "Ferrari",
            corredor: "Charles Leclerc",
            anio: 2023,
            imagen: "img/sf23.jpg"
        },
        {
            codigo: "V003",
            nombre: "W14",
            escuderia: "Mercedes",
            corredor: "Lewis Hamilton",
            anio: 2023,
            imagen: "img/w14.jpg"
        },
        {
            codigo: "V004",
            nombre: "MCL60",
            escuderia: "McLaren",
            corredor: "Lando Norris",
            anio: 2023,
            imagen: "img/mcl60.jpg"
        },
        {
            codigo: "V005",
            nombre: "AMR23",
            escuderia: "Aston Martin",
            corredor: "Fernando Alonso",
            anio: 2023,
            imagen: "img/amr23.jpg"
        },
        {
            codigo: "V006",
            nombre: "C43",
            escuderia: "Alfa Romeo",
            corredor: "Valtteri Bottas",
            anio: 2023,
            imagen: "img/c43.jpg"
        },
        {
            codigo: "V007",
            nombre: "AT04",
            escuderia: "AlphaTauri",
            corredor: "Yuki Tsunoda",
            anio: 2023,
            imagen: "img/at04.jpg"
        },
        {
            codigo: "V008",
            nombre: "VF-23",
            escuderia: "Haas",
            corredor: "Kevin Magnussen",
            anio: 2023,
            imagen: "img/vf-23.jpg"
        }
    ];

    let favoritos = [];
    let mostrandoFavoritos = false;

    // ========== CARGAR VEHÍCULOS ==========
    function renderizar(lista) {
        $("#listaProductos").empty();

        if (lista.length === 0) {
            $("#listaProductos").html('<tr><td colspan="7" style="text-align:center;padding:30px;">No se encontraron vehículos</td></tr>');
        }

        $.each(lista, function (i, p) {
            let esFavorito = favoritos.includes(p.codigo);
            let claseFav = esFavorito ? "favorito" : "";
            let textoFav = esFavorito ? "★ FAVORITO" : "☆ FAVORITO";

            let fila = `
                <tr>
                    <td class="codigo">${p.codigo}</td>
                    <td>${p.nombre}</td>
                    <td>${p.escuderia}</td>
                    <td class="corredor">${p.corredor}</td>
                    <td class="anio">${p.anio}</td>
                    <td class="acciones">
                        <button class="btn-accion btn-detalle" data-codigo="${p.codigo}">Detalles</button>
                        <button class="btn-accion btn-favorito ${claseFav}" data-codigo="${p.codigo}">${textoFav}</button>
                    </td>
                    <td class="imagen">
                        <img src="${p.imagen}" alt="${p.nombre}" class="img-vehiculo">
                    </td>
                </tr>
            `;
            $("#listaProductos").append(fila);
        });

        $("#contadorResultados").text(`MOSTRANDO ${lista.length} VEHÍCULO(S)`);
        actualizarContadorFavoritos();
    }

    $("#btnCargar").on("click", function () {
        mostrandoFavoritos = false;
        aplicarFiltros();
    });

    // ========== FAVORITOS ==========
    function actualizarContadorFavoritos() {
        $("#contadorFavoritos").text(favoritos.length);
    }

    $(document).on("click", ".btn-favorito", function () {
        let codigo = $(this).data("codigo");
        let index = favoritos.indexOf(codigo);

        if (index === -1) {
            favoritos.push(codigo);
            $(this).addClass("favorito").text("★ FAVORITO");
        } else {
            favoritos.splice(index, 1);
            $(this).removeClass("favorito").text("☆ FAVORITO");
        }

        actualizarContadorFavoritos();

        // Si estamos viendo solo favoritos, refrescar
        if (mostrandoFavoritos) {
            aplicarFiltros();
        }
    });

    $("#btnFavoritos").on("click", function () {
        mostrandoFavoritos = !mostrandoFavoritos;
        $(this).toggleClass("activo", mostrandoFavoritos);
        aplicarFiltros();
    });

    // ========== FILTROS + BÚSQUEDA ==========
    function aplicarFiltros() {
        let texto = $("#buscar").val().toLowerCase();
        let escuderia = $("#filtroEscuderia").val();

        let filtrados = productos.filter(function (p) {
            let cumpleTexto = p.nombre.toLowerCase().includes(texto) ||
                              p.corredor.toLowerCase().includes(texto) ||
                              p.escuderia.toLowerCase().includes(texto) ||
                              p.codigo.toLowerCase().includes(texto);

            let cumpleEscuderia = escuderia === "" || p.escuderia === escuderia;
            let cumpleFavorito = !mostrandoFavoritos || favoritos.includes(p.codigo);

            return cumpleTexto && cumpleEscuderia && cumpleFavorito;
        });

        renderizar(filtrados);
        $("#listaProductos").hide();
        renderizar(filtrados);
        $("#listaProductos").fadeIn(600);
    }

    $("#buscar").on("keyup", aplicarFiltros);
    $("#filtroEscuderia").on("change", aplicarFiltros);

    // ========== MODAL DETALLES ==========
    $(document).on("click", ".btn-detalle", function () {
        let codigo = $(this).data("codigo");
        let p = productos.find(x => x.codigo === codigo);

        let html = `
            <div class="modal-header">
                <img src="${p.imagen}" alt="${p.nombre}" class="modal-img">
                <div>
                    <h2>${p.nombre}</h2>
                    <p class="modal-escuderia">${p.escuderia}</p>
                </div>
            </div>
            <div class="modal-info">
                <p><strong>Código:</strong> ${p.codigo}</p>
                <p><strong>Corredor:</strong> <span class="corredor">${p.corredor}</span></p>
                <p><strong>Año:</strong> <span class="anio">${p.anio}</span></p>
                <p><strong>Escudería:</strong> ${p.escuderia}</p>
            </div>
        `;

        $("#modalBody").html(html);
        $("#modalDetalles").fadeIn(250);
    });

    $(".cerrar, #modalDetalles").on("click", function (e) {
        if (e.target === this || $(e.target).hasClass("cerrar")) {
            $("#modalDetalles").fadeOut(200);
        }
    });

});