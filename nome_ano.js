/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 
2022. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou
completará, no ano atual (2023). Caso o usuário não digite um número ou apareça um inválido no campo do
ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

let nome;
let ano;
let idade;


windows.prompt ("Qual seu nome completo?");
while (ano < 1922 || ano > 2022 ){
    try {
        ano = parseInt(prompt('Digite o ano de nascimento entre 1922 e 2022?'));
        if (ano < 1922 || ano > 2022){
            alert('Ano inválido!');
            ano = prompt('Digite novamente o ano de nascimento:');
        } else {
            alert('Seu ano é:', ano);
        }
    } catch (error){
        alert(error);
        alert('Ano invalido. Digite novamente:');
    }
}
