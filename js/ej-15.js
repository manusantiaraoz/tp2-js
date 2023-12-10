/**
 15. Realiza un script que cuente el número de vocales que tiene un texto.
 */
 const texto = prompt("escribe un texto");
 let resultado=0;
 
  if(texto.length != 0){
     for(let i= 0;i <= texto.length-1;i++){
        let vocal=texto.charAt(i); 
        if(vocal =="a"||vocal =="e"||vocal =="i" || vocal =="o" || vocal =="u"){
            resultado++
         } 
         
     }
  }
 
 
     document.write(`<p class="display-3 d-flex justify-content-center aling-content-center">El texto: "${texto}" tiene ${resultado} vocales</p>`)