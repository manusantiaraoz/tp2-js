// Pedir número de filas y columnas al usuario
let filas = parseInt(prompt("Ingrese el número de filas:"));
let columnas = parseInt(prompt("Ingrese el número de columnas:"));

// Crear la tabla
let tabla = "<table>";

// Calcular el número inicial
let numeroInicial = filas * columnas;

// Generar las filas y columnas de la tabla
for (let i = 0; i < filas; i++) {
  tabla += "<tr>";
  for (let j = 0; j < columnas; j++) {
    tabla += "<td>" + numeroInicial + "</td>";
    numeroInicial--;
  }
  tabla += "</tr>";
}

tabla += "</table>";

// Mostrar la tabla en el documento
document.write(tabla);