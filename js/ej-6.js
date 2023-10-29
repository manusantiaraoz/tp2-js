//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const n1= parseInt(prompt("ingresa un numero"));
const n2= parseInt(prompt("ingresa otro numero"));

if(n1>n2){
document.write(`<p>${n1} es el numero mayor</p>`)
}else if(n1<n2){
    document.write(`<p>${n2} es el numero mayor</p>`)
}else{
    document.write(`<p>los numero son iguales</p>`)
}