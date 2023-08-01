/*Contém mais de um elemento. Para acessar elemento, usar colchetes (0,1,2...). Pra alterar valor,
atribuir indice e colocar novo valor. Para adicionar novos indices, 'usar variavel.push()'. 
Para remover item, usar 'delete' = variavel.lenght-1. Para remover TUDO, usar 'array.splice()'*/


/* Exercício:
1. Acessar o 2 elemento e armazenar em uma variavel chamada "segundoElemento".*/

const meuArray = [10,20,30,40,50];
const segundoElemento = meuArray [1];

/* 2. Calcular e exibir o tamanho do seguinte array: const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];*/

const frutas = ["maça", "banana", "laranja", "uva", "manga"];
const tamanho = frutas.length;
console.log (tamanho);

/* 3. Adicionar o elemento "pera" ao final do array de frutas do exercício anterior.*/

const frutas2 = ["maça", "banana", "laranja", "uva", "manga"];
frutas2.push("pera");

/* 4. Remover o primeiro elemento do array de frutas do exercício anterior.*/

const frutas3 = ["maça", "banana", "laranja", "uva", "manga"];
frutas3.shift();
console.log(frutas3);

/* 5. Dado o array abaixo, verificar se o número 25 está presente e exibir uma mensagem indicando
se ele foi encontrado ou não. const numeros = [10,20,30,40,50];*/

const numeros = [10,20,30,40,50];
const verificarNumero = 25;
const verificarPresente = numeros.includes(verificarNumero);
console.log ("O número", verificarNumero, "foi encontrado?", verificarPresente);