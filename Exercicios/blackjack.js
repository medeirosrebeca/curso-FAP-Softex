//criar 3 variaveis: 2 cartas e soma.
//testar o codigo se a soma das 2 cartas é maior que 21, caso true, indormar ao jogador que perdeu.
//ao final do codigo, informar a soma dos pontos do jogador
//testar o codigo no terminal atraves do comando C:\>node blackjack.js 

var carta1, carta2, soma;
carta1 = 9;
carta2 = 11;
soma = carta1 + carta2;

if (soma > 21){
    //console.log((typeof soma) == "boolean");
    console.log ("Você perdeu.");
}
    console.log (`A soma dos pontos é: ${soma}`); //usar entre crases.