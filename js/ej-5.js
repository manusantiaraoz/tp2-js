/*
Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
*/
const n1= parseInt(prompt("digita un numero"));
const n2= parseInt(prompt("digita otro numero"));

document.write(`<p>la suma de el primer numero ingresado (${n1}) y el segundo (${n2}) es: ${n1+n2} </p>`)