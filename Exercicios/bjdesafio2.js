//criar mais 5 variaveis sendo 4 cartas do banco e 1 com a soma delas.
//criar uma nova logica onde sera testado se as soma das cartas do banco é maior que 21 OU 
  //se a soma das suas cartas é menor ou igual a 21. E suas cartas tem soma maior que o banco.
//imprimir que o jogador venceu ou que o banco venceu, dependendo dos somatorios das cartas.
//testar o seu codigo no terminal atraves do comando C:> node bjdesafio2.js


var carta_Jogador1, carta_Jogador2, soma_Jogador;
let carta_Banco1, carta_Banco2, carta_Banco3, carta_Banco4, soma_Banco;
carta_Jogador1 = 8;
carta_Jogador2 = 10;
carta_Banco1 = 12;
carta_Banco2 = 4;
carta_Banco3 = 5;
carta_Banco4 = 7;

soma_Jogador = carta_Jogador1 + carta_Jogador2;
soma_Banco = carta_Banco1 + carta_Banco2 + carta_Banco3 + carta_Banco4


if (soma_Jogador > 21 && soma_Banco <= 21){
    console.log (`Você tem: ${soma_Jogador} e o Banco tem: ${soma_Banco}`);
    console.log ("Você PERDEU.");
} else if (soma_Jogador <= 21 && soma_Banco > 21){
    console.log (`Você tem: ${soma_Jogador} e o Banco tem: ${soma_Banco}`);
    console.log ("o banco GANHOU.");
}