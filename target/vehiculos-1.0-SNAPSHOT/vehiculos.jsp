<%-- 
    Document   : vehiculos
    Created on : 10 set. 2026, 3:40:34 p. m.
    Author     : josse
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Catálogo de Vehículos F1</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="js/productos.js"></script>
</head>
<body>
    <div class="container">
        <h1>Catálogo de Vehículos de Fórmula 1</h1>

        <!-- Controles superiores -->
        <div class="controls">
            <button id="btnCargar" class="btn-primary">Cargar Vehículos</button>
            
            <button id="btnFavoritos" class="btn-secondary">
                ★ Ver Favoritos (<span id="contadorFavoritos">0</span>)
            </button>

            <select id="filtroEscuderia">
                <option value="">Todas las Escuderías</option>
                <option value="Red Bull Racing">Red Bull Racing</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Mercedes">Mercedes</option>
                <option value="McLaren">McLaren</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="Alfa Romeo">Alfa Romeo</option>
                <option value="AlphaTauri">AlphaTauri</option>
                <option value="Haas">Haas</option>
            </select>
        </div>

        <!-- Buscador -->
        <input type="text" id="buscar" placeholder="Buscar vehículo, corredor o escudería...">

        <!-- Contador -->
        <div id="contadorResultados" class="contador">MOSTRANDO 0 VEHÍCULO(S)</div>

        <!-- Tabla -->
        <div class="table-wrapper">
            <table id="tablaProductos">
                <thead>
                    <tr>
                        <th>CÓDIGO</th>
                        <th>VEHÍCULO</th>
                        <th>ESCUDERÍA</th>
                        <th>CORREDOR</th>
                        <th>AÑO</th>
                        <th>ACCIÓN</th>
                        <th>IMAGEN</th>
                    </tr>
                </thead>
                <tbody id="listaProductos"></tbody>
            </table>
        </div>
    </div>

    <!-- Modal de Detalles -->
    <div id="modalDetalles" class="modal">
        <div class="modal-contenido">
            <span class="cerrar">&times;</span>
            <div id="modalBody"></div>
        </div>
    </div>

    <footer>
        REALIZADO POR POLO CHAVEZ LUCIO<br>
        <span>SI PUEDE IMAGINARLO, PUEDES DISEÑARLO</span>
    </footer>
</body>
</html>