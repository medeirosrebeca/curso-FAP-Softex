// function exibirSaudacao() {             *USANDO SEM PARAMETROS
//     console.log('Hello World!');
// }
// exibirSaudacao(); /*o que voce quiser mostrar o que está dentro da função, usar o nome da função e
// o que esta em parenteses.*/
// MÉTODO está vinculado a um objeto. Ex.: console.log().

// function exibirSaudacao(nome) {          *USANDO COM 1 PARAMETRO
//     console.log('Olá', nome,'!');
// }
// exibirSaudacao('Waldeck');

// function saudacao(nome,dia,mes){          *USANDO COM VARIOS PARAMETROS
//     console.log('Bom dia ' + nome, ', hoje é ' +dia, 'de ' +mes );
// }
// saudacao('Rebeca', 8, 'agosto');

// function saudacao(nome,dia,mes){          *USANDO O CIFRÃO
//     console.log(`Bom dia ${nome}, hoje é ${dia} de ${mes}`);
// }
//     saudacao('Rebeca', 8, 'agosto');

//1. Criar funcao saudacao e exibir msg "Olá, mundo!" no console qnd for chamada.
// function saudacao (){
//     console.log('Olá mundo!');
// }
//     saudacao();

//2. Criar funcao dobro que aceite parametro num e exibir o dobro do numero.
// function dobro (num){
//     console.log(num);
// }
// dobro (2*4);

/*3. Criar função mostrarNumeros que receba 2 parametros: inicio e fim. Exibir tds os inteiros 
// no intervalo de inicio e fim (inclusive). */

// function mostrarNumeros (inicio, fim){
//     for (var numero = Math.ceil(inicio); numero <= Math.floor(fim); numero++){ 
//     console.log(numero); //biblioteca para arredondar numeros. 
//     }
// } 
//     mostrarNumeros (2.7,10.9);

//4. Escrever função verificarPar que aceita numero como entrada e exibir se é par ou não.

// function verificarPar (numero){
//     if (numero % 2 == 0){
//         console.log('Par');
//     } else {
//         console.log('Impar');
//     }
// }
//     verificarPar(9);

//5. Criar função imprimirLista que aceite array como parametro e exiba cada elemento desse array.

function imprimirLista (x){
    for (var i = 0; i <= x.length-1; i++) {
    console.log(x[i]); //criar um for e definir o tamanho.
    }
}
    let lista = [4,7,9,43243,'tetrx'];
    imprimirLista (lista);    //criar depois o array e chamar dentro da função o array.
