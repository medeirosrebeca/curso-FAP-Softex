/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 
2022. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou
completará, no ano atual (2023). Caso o usuário não digite um número ou apareça um inválido no campo do
ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

let nome = console.log("Qual seu nome completo?");
let ano == false;

    while (ano >= 1922 || ano <= 2022 == true) {
        
        try{
        ano = parseInt(prompt('Digite o ano de nascimento:'));
        if (ano < 1922 || ano > 2022 || isNaN(ano)) {
            throw new Error ('Ano invalido. Digite novamente:');
        } else {
            alert (`Olá, ${nome}! Você tem ${2023-ano} anos`);
            break;
        } 
        } catch (error) {
            prompt('Inválido.Digite novamente:');
    }
        }


        let nome = prompt("Qual seu nome completo?");


        function qualAno(ano) {
            if (ano < 1922 || ano > 2022 || isNaN(ano)) {
                throw new Error ('Ano invalido. Digite novamente:');
            }
            return ano;
        }
            while (ano >= 1922 || ano <= 2022 == true){
                try{
                let ano = parseInt(prompt('Digite o ano de nascimento:')); 
                resposta = qualAno ()
                }  
                    alert (`Olá, ${nome}! Você tem ${2023-ano} anos`);
                while (ano >= 1922 || ano <= 2022){    
                } 
                } catch (error) {
                    prompt('Inválido.Digite novamente:');
            }
                