// function exibirSaudacao(nome, saudacao = 'Hello'){
//     console.log(`${saudacao}, ${nome} ! Tenha um excelente dia!`);
// }

// exibirSaudacao('Rebeca');

/*1. Criar função chamada saudacao que aceita parametro nome para uma pessoa e exibir 'Ola, [nome]!',
usando nome caso nenhuma seja fornecido. */

// function saudacao (nome, saudacao = 'Olá'){
  
//     console.log(`${saudacao}, ${nome} !`);
      
// }
//     saudacao ('Rebeca', 'Bom dia');

/* 2. Criar funcao chamada calculadora que receba dois numeros (num1 e num2) e um operador matematico
(operacao) como parametros. A função deve realizar a operacao matematica entre num1 e num2 com um
valor padrao de operacao sendo '+'.*/

// function calculadora (num1, num2, operacao = '+'){
//     switch (operacao){
//     case '+':
//         console.log(num1 + num2);
//     break;
//     case '-':
//         console.log(num1 - num2);
//     break;
//     case '*':
//         console.log(num1 * num2);
//     break;
//     case '/':
//         console.log(num1 / num2);
//     break;
//     }
// }
// calculadora (4, 2, '-');

/* 3. Criar funcao contagemRegressiva que aceite parametro inicio para inicar contagem regressiva.
A funcao deve exibir uma contagem no console do numero ate 1, usando valor de inicio 10.*/

//  function contagemRegressiva (inicio = '10'){
//     while (inicio >= 1){
//         console.log(inicio);
//         inicio--;
        
//     }
//  }
//  contagemRegressiva();

/* 1. Criar funcao apresentacao que aceite 3 parametros: nome, idade, profissao. Exibir console msg
de apresentacao no formato 'Ola, eu sou [nome], tenho [idade] anos e sou [prof].' usando valores
padrao para os parametros caso nehum seja fornecido.*/

// function apresentacao(nome, idade, profissao){
//     console.log(`Ola, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`);
// }
//     apresentacao ('Rebeca', '33', 'Estudante');

/* 2. Criar funcao mensagemPersonalizada que receba parametro texto para msg e um parametro estilo
para o estilo da msg ('normal', 'negrito', 'italico') com um valor padrao de estilo sendo 'normal'.
A funcao deve exibir no console o texto fornecido com o estilo especificado.*/

// function mensagemPersonalizada (texto, estilo = 'normal'){
//     switch(estilo){
//         case 'normal':
//             console.log(texto);
//         break;
//         case 'negrito':
//             console.log(texto.bold());
//         break;
//         case 'italico':
//                 console.log(texto.italics());
//         break;
//     }
// }
// mensagemPersonalizada ('Bem vindo!', 'italico');