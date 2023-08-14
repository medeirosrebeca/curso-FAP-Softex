//1. declarar variavel minhaVar, sem valor
//2. atribuir valor 10 a variavel minhaVar
//3. declarar nova variavel chamada soma e adicionar uma instrução somando os valores 15 e 8.
//4. atribuir variavel soma todo o valor dela somando 1, usando o operador de soma abreviado.
//5. atribuir a variavel soma todo o valor dela, multiplicando por 3, usando o operador de multiplicacao abreviado.
//6. Qual é o valor da variavel soma ate aqui?
//7. declarar uma variavel chamada fazSol, atribuindo a ela o valor booleano que representa verdadeiro.
//8. declarar uma variavel chamada comida que recebe um array com os valores arroz, feijao e ovo.
//9. digite a instrução que imprime o valor de feijao que esta na variavel comida.
//10. digitar o codigo que verifica se a variavel soma é igual a variavel minhaVar (testando tambem o tipo)
//11. digitar o codigo que verifica se a variavel minhaVar é menor ou igual a variavel soma.
//12. criar uma função chamda divisão que receba como parametro dois numeros, e retorne o resultado da divisão entre eles.
//13. Invocar a função criada acima, passando os parametros 10 e 2.

var minhaVar;
minhaVar =10;

var soma = 15+8;
soma += 1; //soma ++ ou soma = soma + 1
soma *=3;
console.log(soma);

var fazSol;
fazSol = true;
console.log(fazSol);

var comida = ["arroz","feijao", "ovo"];
console.log(comida [1]);

soma === minhaVar;
minhaVar <= soma;

function divisao (a,b){
    return a/b;
}; 
console.log(divisao(10,2));