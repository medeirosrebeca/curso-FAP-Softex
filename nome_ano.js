/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 
2022. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou
completará, no ano atual (2023). Caso o usuário não digite um número ou apareça um inválido no campo do
ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

let ano;
let idade;
let nome;
let anoatual;

nome = prompt("Qual seu nome completo?");
alert('Olá, ' + nome);

ano = parseInt(prompt('Digite o ano de nascimento entre 1922 e 2022?'));
while (ano < 1922 && ano > 2022 ){
    ano = prompt ('Ano inválido. Digite novamente o ano:');
    if (ano > 1922 || ano < 2022){
        anoatual = new Date().getFullYear();
        console.log('Você tem' + anoatual - ano, 'anos');
    }
}
