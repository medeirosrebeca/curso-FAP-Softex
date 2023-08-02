/*Fazer uma calculadora de 2 números com três parâmetros: os dois primeiros serão os números da operação
e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma; 2. Subtração; 3. Multiplicação; 4. Divisão
Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.*/

const resultado = calculadora (10,2,5)

function calculadora (num1, num2, entrada) {
      switch (entrada) {
      case 1:
         console.log (`Você definiu a subtração dos números ${num1} + ${num2} = ${num1 + num2}`);
         break;
      case 2:
         console.log (`Você definiu a subtração dos números ${num1} - ${num2} = ${num1 - num2}`);
         break;
      case 3:
         console.log (`Você definiu a multiplicação dos números ${num1} * ${num2} = = ${num1 * num2}`);
         break;
      case 4:
         console.log (`Você definiu a dvisão dos números ${num1} / ${num2} = = ${num1 / num2}`);
         break;
      default:
         console.log ("Resultado 0. Escolha entre 1 a 4.");
   }
}