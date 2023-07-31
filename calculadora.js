//Fazer uma calculadora de 2 números com três parâmetros: os dois primeiros serão os números da operação
   //e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
//1. Soma; 2. Subtração; 3. Multiplicação; 4. Divisão
//Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

let calculadora;
calculadora = 1;

switch (calculadora){
   case 1:
   console.log ("Soma");
  break;
   case 2:
   console.log ("Subtração");
   break;
   case 3:
   console.log ("Multiplicação");
   break;
   case 4:
   console.log ("Divisão");
   break;
   default:
   console.log ("0");
}