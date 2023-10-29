// Escribe un programa que pida un número y diga si es divisible por 2
const n1= parseInt(prompt("ingresa un numero"));
if(n1%2==0){
    document.write(`<p>${n1} es divisible en dos</p>`)
}else{
    document.write(`<p>${n1} no es divisible en dos</p>`)
}