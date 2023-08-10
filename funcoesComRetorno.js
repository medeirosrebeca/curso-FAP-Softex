// function criarMensagemDeSaudacao(nome){
//     const mensagem = `Ola, ${nome}`;
//     return mensagem;
// }
//  console.log(criarMensagemDeSaudacao ('Rebeca')); //Para mostrar na tela, usar CONSOLE.LOG.

/* 1. Criar funcao somar que aceite dois numeros como parametros e retorne a soma deles.*/

// function somar(numero1, numero2){
//     const resultado = numero1 + numero2;
//     return resultado;
// }
// console.log(somar(2,7));

/* 2. Escrever funcao ehPar que aceite um numero como parametro e retorne true se o numero for par
e false caso contrario.*/

//  function ehPar (numero){
//   return (numero % 2 == 0);   
//  }
//  console.log(ehPar(2));

/* 3. Criar funcao maiorNumero que receba 3 numeros como parametros e retorne o maior deles.*/

// function maiorNumero(numero1, numero2, numero3){
//     if (numero1 > numero2 && numero1 > numero3){
//         return numero1;
//     } else if (numero2 > numero3){
//         return numero2;
//     } else {
//         return numero3;
//     }
// }
// console.log(maiorNumero(2,5,3));

/* 4. Escrever funcao calcularIMC que receba o peso e altura como parametros e retorne o IMC.*/

// function calcularIMC(peso, altura){
//     const resultado = peso/(altura*altura);
//     return resultado;
// }
// console.log(calcularIMC(70, 1.70));

/* 1. Criar funcao contarVogais que aceite string como parametro e retorne o numero de vogais 
(a,e,i,o,u) presentes na string.*/

//  function contarVogais(string){
//     let vogais = 'aAeEiIoOuU';
//     let totalVogais = 0;
//     for(var numero = 0; numero < string.length ; numero++) {
//         if (vogais.indexOf(string[numero]) != -1) {
//             totalVogais++;
//         }
//     }
//     return totalVogais;
//  }
//  console.log(contarVogais('Rebeca'));


/* 2. Escrever funcao celsiusParaFahrenheit que receba temperatura em Celsius como parametro e 
retorne o valor equivalente em Fahrenheit.*/

 function celsiusParaFahrenheit(temperatura){
    var celsius = ;
    var fahrenheit = (9*celsius/5) + 32 ;
    return fahrenheit;
 }
console.log(celsiusParaFahrenheit(72));


/* 3. Criar funcao gerarSenha que aceite parametro tamanho (numero inteiro) e retorne uma senha
aleatoria com o tamanho especificado.*/

