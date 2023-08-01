/* Exercício:
1.Criar 2 arrays com números de 1 a 5 cada e concatená-los em um novo array.*/

const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];
const concate = array1.concat(array2);
console.log(concate);

/*2.Como array abaixo, criar um novo array contendo apenas os numeros pares. 
const numeros = [1,2,3,4,5,6,7,8,9,10]*/

const numeros = [1,2,3,4,5,6,7,8,9,10];
const novoArray = numeros.filter(numeros => numeros % 2 === 0);
console.log (novoArray);


/*3.Ordenar o array em ordem crescente. const numeros = [3,1,4,1,5,9,2,6,5,3,5]*/

const numeros2 = [3,1,4,1,5,9,2,6,5,3,5];
numeros2.sort();
console.log (numeros2);

/*4.Com o array de frutas, encontrar o indice que a fruta "laranja" esta localizada.
const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga']*/

const frutas = ['maca', 'banana', 'laranja', 'uva', 'manga'];
console.log (frutas.indexOf('laranja'));


/*5.Criar uma função que receba um parametro e verificar se é um array ou não. A função deve
retornar true se for um array e false caso contrario.*/



console.log(Array.isArray(frutas));