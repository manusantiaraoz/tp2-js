/**
 * 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:
Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1

 */
const texto = prompt("Ingrese una cadena de texto:");
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    if ("aeiouAEIOU".includes(texto[i])) {
        posicion = i + 1;
        break;
    }
}


    document.write(`<p class="display-3 d-flex justify-content-center aling-content-center">La primera vocal en la cadena de texto es '${texto[posicion - 1]}' y está en la posición ${posicion}</p>`)