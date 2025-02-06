/*Utilizando a linguagem JavaScript, crie uma situação matemática na qual os números precisam ser 
informados pelo usuário. Além disso, deve ocorrer uma exceção dentro do código. Utilize os métodos try(),
catch() e finally() para realizar a captura e o tratamento dessa exceção.*/

var readlineSync = require('readline-sync')

try {
    let numero1 = readlineSync.question("Digite um número:");
    let numero2 = readlineSync.question("Digite outro número:");

    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Digite apenas números.");
    } else {
        let resultado = numero1 % numero2;
        console.log(`Resto da divisão de ${numero1} e ${numero2} é: ${resultado}.`);
        console.log("------------------------------------");
    }
} catch (e) {
    console.error(e.message);
} finally {
    console.log("O código foi executado com sucesso ou ocorreu um erro.");
}