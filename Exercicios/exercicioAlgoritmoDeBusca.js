/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para
encontrar o valor 20. Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo
com a que for mais adequada para essa situação. Codifique a solução mais eficiente para buscar o número
20 no array.*/

// 1.Busca Linear:

const arrayLinear = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const verificarNumero = 20;

if (arrayLinear.indexOf(verificarNumero)){
console.log(`O elemento ${verificarNumero} foi encontrado no indice ${arrayLinear.indexOf(verificarNumero)}.`);
}

// 2.Busca Binaria:

