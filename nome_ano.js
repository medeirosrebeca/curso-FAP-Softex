/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 
2022. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou
completará, no ano atual (2023). Caso o usuário não digite um número ou apareça um inválido no campo do
ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

let nome = prompt("Qual seu nome completo?");
let ano = true;

    while (true) {
        ano = parseInt(prompt('Digite o ano de nascimento:'))
        try{
            if (isNaN(ano)) {
            throw Error ('Digite apenas números:');
            }
            if (ano < 1922 || ano > 2022) {
            alert('Ano inválido. Digite entre 1922 a 2022:');
            } 
            else if (ano >= 1922 || ano <= 2022) {
        console.log(`Olá, ${nome}! Você tem ${2023-ano} anos`);
        break;
        }
        } catch (e) {
            console.log('Valor informado inválido.');   
            }
    }