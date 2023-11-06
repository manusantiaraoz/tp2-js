/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/

let cadena= "";

do{
    let nota = prompt("ingresa una palabra") + " - ";
    cadena= cadena + nota;
}while(confirm("continuar"));

document.write(cadena);

