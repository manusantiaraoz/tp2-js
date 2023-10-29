//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const n1= parseInt(prompt("ingresa un numero"));
const n2= parseInt(prompt("ingresa otro numero"));
const n3= parseInt(prompt("ingresa otro numero"));

if(n1>n2 && n1>n3){
document.write(`<p>${n1} es el numero mayor</p>`)
}else if(n2>n1 && n2>n3){
    document.write(`<p>${n2} es el numero mayor</p>`)
}else{
    document.write(`<p>${n3} es el mayor</p>`)
}