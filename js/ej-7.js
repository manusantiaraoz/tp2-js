let num = prompt("Introduce un número entre 1 y 50:");

if (num > 50) {
  console.log("El número es mayor que 50.");
} else {
  for (let i = num; i >= 1; i--) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += i + " ";
    }
    document.write(fila +"<br>");
  }
}
