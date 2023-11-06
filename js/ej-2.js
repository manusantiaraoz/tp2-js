/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

*/

const nota = parseInt(prompt("ingresa tu nota"));
if (nota < 11 && nota >= 0) {
  if (nota <= 2) {
    document.write(`<p>Muy deficiente</p>`);
  } else if (nota <= 4) {
    document.write(`<p>Insuficiente</p>`);
  } else if (nota <= 6) {
    document.write(`<p>Suficiente</p>`);
  } else if (nota == 7) {
    document.write(`<p>Bien</p>`);
  } else if (nota <= 9) {
    document.write(`<p>Notable</p>`);
  } else if (nota <= 10) {
    document.write(`<p>Sobresaliente</p>`);
  }
} else {
  document.write(`<p>ingrese una nota valida</p>`);
}
