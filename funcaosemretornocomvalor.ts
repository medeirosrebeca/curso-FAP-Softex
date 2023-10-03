//Exercícios Funções sem retorno com valores padrão
//1. Crie uma função chamada saudacao que aceita um parâmetro nome para uma pessoa e exiba no console
//a saudação "Olá, [nome]!" utilizando um valor padrão para nome caso nenhum seja fornecido.
// function saudacao (nome: string, saudacao = 'Olá') :void{
//     console.log(`${saudacao}, ${nome} !`);
// }
// saudacao ('Rebeca', 'Bom dia');

//2. Escreva uma função chamada calculadora que receba dois números (num1 e num2) e um operador
//matemático (operacao) como parâmetros. A função deve realizar a operação matemática entre num1 e 
//num2 (por exemplo, adição, subtração, multiplicação, divisão) com um valor padrão de operação 
//sendo "+".
// function calculadora (num1:number, num2:number, operacao = '+'):void {
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

//3. Crie uma função chamada contagemRegressiva que aceite um parâmetro inicio para iniciar a 
//contagem regressiva. A função deve exibir no console uma contagem regressiva a partir do número
//fornecido até 1, utilizando um valor padrão de início igual a 10.
// function contagemRegressiva (inicio = 10): any {
//     while (inicio >= 1){
//     console.log(inicio);
//     inicio--;
//     }
// }
// contagemRegressiva();

//1.1 Escreva uma função chamada apresentacao que aceite três parâmetros: nome, idade e profissao. A função deve exibir no console uma mensagem de apresentação no formato "Olá, eu sou [nome], tenho [idade] anos e sou [profissao].", utilizando valores padrão para os parâmetros caso nenhum seja fornecido.
// function apresentacao(nome: string, idade: number, profissao:string): void{
//     console.log(`Ola, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`);
// }
// apresentacao ('Rebeca', 33, 'Estudante');

//2.2 Crie uma função chamada mensagemPersonalizada que receba um parâmetro texto para uma mensagem e um parâmetro estilo para o estilo da mensagem (por exemplo, "normal", "negrito", "itálico"), com um valor padrão de estilo sendo "normal". A função deve exibir no console o texto fornecido com o estilo especificado.
// function mensagemPersonalizada (texto: string, estilo = 'normal'):void {
//     switch(estilo){
//     case 'normal':
//         console.log(texto);
//     break;
//     case 'negrito':
//         console.log(texto.bold());
//     break;
//     case 'italico':
//         console.log(texto.italics());
//     break;
//     }
// }
// mensagemPersonalizada ('Bem vindo!', 'italico');