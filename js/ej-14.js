/*
 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */
const texto = prompt("escribe un texto");
let resultado="";

 if(texto.length != 0){
    for(let i= 0;i <= texto.length-1;i++){
        resultado+= texto.charAt(i) +"-"
        
    }
 }


    document.write(`<p class="display-3 d-flex justify-content-center aling-content-center">${resultado}</p>`)