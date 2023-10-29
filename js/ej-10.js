/*
Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/ 
const n1= parseInt(prompt("ingresa un numero"));
if(n1%2==0){
    document.write(`<p>${n1} es divisible en 2</p>`);
}else if(n1%3==0){
    document.write(`<p>${n1}  es divisible en 3</p>`);
}else if(n1%5==0){
    document.write(`<p>${n1}  es divisible en 5</p>`);
}else if(n1%7==0){
    document.write(`<p>${n1}  es divisible en 7</p>`);
}else{
    document.write(`<p>${n1} no es divisible ni en 2,3,5 y 7</p>`);
}