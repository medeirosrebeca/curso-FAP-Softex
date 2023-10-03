//Exercícios Funções sem retorno (Usando TYPESCRIPT):
//1. Crie uma função chamada saudacao que exiba a mensagem "Olá, mundo!" no console quando for
//chamada.
// function saudacao(): void {
//     console.log('Olá mundo!');
// }
// saudacao();

//2. Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro desse número no
//console.
// function dobro (num:number): void {
//     console.log(num);
// }
// dobro (2*4);

//3. Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. Essa função deve exibir todos os números inteiros no intervalo de inicio a fim (inclusive) no console.
// function mostrarNumeros (inicio: number, fim: number): void{
//     for (var numero = Math.ceil(inicio); numero <= Math.floor(fim); numero++){ 
//         console.log(numero); //biblioteca para arredondar numeros. 
//     }
// } 
// mostrarNumeros (2.7,10.9);

//4. Escreva uma função chamada verificarPar que aceite um número como entrada e exiba no console se o número é par ou não.
// function verificarPar (numero:number): void{
//     if (numero % 2 == 0){
//         console.log('Par');
//     } else {
//         console.log('Impar');
//     }
// }
// verificarPar(9);

//5. Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada elemento desse array no console, um por um.
function imprimirLista (x:any): void {
    for (var i = 0; i <= x.length-1; i++) {
    console.log(x[i]); //criar um for e definir o tamanho.
    }
}
    let lista = [4,7,9,43243,'tetrx'];
    imprimirLista (lista);    //criar depois o array e chamar dentro da função o array.


//1.1Escreva uma função chamada calcularMedia que receba um array de números como parâmetro e calcule a média desses números. Não é necessário exibir o resultado, apenas retorne o valor da média.

//2.2Crie uma função chamada maiorNumero que receba um array de números como parâmetro e exiba o maior número presente no array no console.

//3.3Escreva uma função chamada contarVogais que aceite uma string como parâmetro e conte quantas vogais (a, e, i, o, u) ela contém. Exiba o resultado no console.

//4.4Crie uma função chamada imprimirTabuada que aceite um número como entrada e exiba a tabuada desse número de 1 a 10 no console.

//5.5Escreva uma função chamada verificarPrimo que receba um número como parâmetro e exiba no console se o número é primo ou não.



