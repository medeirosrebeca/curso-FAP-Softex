/*Fazer uma calculadora de 2 números com três parâmetros: os dois primeiros serão os números da operação
e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma; 2. Subtração; 3. Multiplicação; 4. Divisão
Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.*/
num1 = 10;
num2= 2;
entrada = 1;

function calculadora (num1, num2, entrada){
      var num1 = Number.prompt ("Digite um número:");
      var num2 = Number.prompt ("Digite outro número:");
      var entrada = Number.prompt ("Digite um número de 1 a 4:");
      if (entrada === 1){
         console.log (`Você definiu a soma dos números ${num1} + ${num2}`);
      } else if (entrada === 2) {
         console.log (`Você definiu a subtração dos números ${num1} - ${num2}`);
      } else if (entrada === 3){
         console.log (`Você definiu a multipllicação dos números ${num1} * ${num2}`);
      }else if (entrada === 4){
         console.log (`Você definiu a divisão dos números ${num1} / ${num2}`);
      } else     
   return "Resultado 0.";
}