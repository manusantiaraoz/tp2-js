/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
let nombre1=prompt("ingresa un nombre");
let edad1= parseInt(prompt("ingresa la edad"));

let nombre2=prompt("ingresa un nombre");
let edad2=parseInt(prompt("ingresa la edad"));

let nombre3=prompt("ingresa un nombre");
let edad3=parseInt(prompt("ingresa la edad"));

edadMayor=Math.max(edad1,edad2,edad3);

if(edadMayor === edad1){
    document.write(`<p> ${nombre1} es el mayor con ${edad1} años </p>`)

}else if(edadMayor === edad2){
    document.write(`<p> ${nombre2} es el mayor con ${edad2} años </p>`)

}else(
    document.write(`<p> ${nombre3} es el mayor con ${edad3} años </p>`)
)


