/* 
Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/
const edad= parseInt(prompt("ingresa tu edad"));
if(edad >=18){
    document.write(`<p>si puedes conducir</p>`)
}else{
    document.write(`<p>no puedes conducir, aun no eres mayor de edad</p>`)
}
