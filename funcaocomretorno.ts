//Exercícios Funções com retorno
//1. Crie uma função chamada somar que aceite dois números como parâmetros e retorne a soma deles.
// function somar(numero1:number, numero2:number): number{
//     const resultado = numero1 + numero2;
//     return resultado;
// }
// console.log(somar(2,7));

//2. Escreva uma função chamada ehPar que aceite um número como parâmetro e retorne true se o número
//for par e false caso contrário.
// function ehPar (numero:number) :boolean {
//     return (numero % 2 == 0);   
// }
// console.log(ehPar(2));

//3. Crie uma função chamada maiorNumero que receba três números como parâmetros e retorne o maior
//deles.
// function maiorNumero(numero1:number, numero2:number, numero3:number): number{
//     if (numero1 > numero2 && numero1 > numero3){
//         return numero1;
//     } else if (numero2 > numero3){
//         return numero2;
//     } else {
//         return numero3;
//     }
// }
// console.log(maiorNumero(2,5,3));

//4. Escreva uma função chamada calcularIMC que receba o peso e a altura de uma pessoa como parâmetros
//e retorne o índice de massa corporal (IMC) calculado.
// function calcularIMC(peso:number, altura:number): number{
//     const resultado = peso/(altura*altura);
//     return resultado;
// }
// console.log(calcularIMC(67, 1.60));

//1.1 Crie uma função chamada contarVogais que aceite uma string como parâmetro e retorne o número
//de vogais (a, e, i, o, u) presentes na string.
// function contarVogais(string:string): number{
//     let vogais = 'aAeEiIoOuU';
//     let totalVogais = 0;
//     for(var numero = 0; numero < string.length ; numero++) {
//         if (vogais.indexOf(string[numero]) != -1) {
//             totalVogais++;
//         }
//     }
//     return totalVogais;
// }
// console.log(contarVogais('Rebeca'));

//2.2 Escreva uma função chamada celsiusParaFahrenheit que receba uma temperatura em graus Celsius
//como parâmetro e retorne o valor equivalente em Fahrenheit.
// function celsiusParaFahrenheit(celsius:number): number{;
//     var fahrenheit = (9*celsius/5) + 32 ;
//     return fahrenheit;
//  }
// console.log(celsiusParaFahrenheit(72));

//3.3 Crie uma função chamada gerarSenha que aceite um parâmetro tamanho (número inteiro) e retorne
//uma senha aleatória com o tamanho especificado.
// function gerarSenha(tamanho:number): string{
//     let caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?@#$%&*()[]{}\|/+-_';
//     let senha = "";

//     for(let i = 0; i < tamanho; i++) {
//         const indiceAleatorio = Math.floor(Math.random()*caracteres.length);
//         senha+= caracteres.charAt(indiceAleatorio);
//     };
//     return senha;
// }
// console.log(gerarSenha(46));