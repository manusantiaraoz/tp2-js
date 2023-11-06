/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/ 
/*
1-que el usuario pueda registrar numeros, hasta cancelar
2-si no es un numero, indicar con un alert y seguir pidiendo numeros
3-mostrar la suma de numeros
*/
let bandera = true
let suma = 0;
while(bandera){
    bandera=confirm("continuar");
    if(bandera==true){
        let n = parseInt(prompt("ingresa un numero"));
        if(Number.isInteger(n)){
            suma= suma + n;
        }else{
            alert("no agregaste un numero");
        }
    }else{
        break
    }
}

document.write(suma);