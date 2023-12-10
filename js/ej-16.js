/**
 * 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */
const texto = prompt("escribe un texto");
let resultado="";

 if(texto.length != 0){
    for(let i= texto.length-1;i >= 0;i--){

       let vocal=texto.charAt(i); 
       
           resultado+=vocal
        
        
    }
 }


    document.write(`<p class="display-3 d-flex justify-content-center aling-content-center">El texto: "${texto}" al revez es: ${resultado} </p>`)