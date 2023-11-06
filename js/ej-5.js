/*
Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

*/
let bandera = true;
let nletra=0;
let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]



while(bandera){
    let n = parseInt(prompt("ingresa tu dni"));
    if(Number.isInteger(n) && n >= 0 && n <= 99999999){
        nletra=n%23;
        alert("--->" + letra[nletra]);
        console.log("--->" + letra[nletra]);
    }else{
        alert("no agregaste un numero o el dni no es valido");
    }
    
    bandera=confirm("continuar");
}

