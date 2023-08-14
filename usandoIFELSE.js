var num, texto;
num = 10;
texto = "Oi";

//se um numero é positivo. caso não, mensagem de erro.
if (num >= 0){
    console.log("O numero é positivo.",num);
} else {
console.log("O numero é negativo.");    
}

//se um numero é par. caso não, mensagem que é impar.
if (num %2 == 0){
    console.log("O numero é par.",num);
} else { 
console.log("O numero é ímpar.");    
}

//se uma string é vazia. caso não, mostrar o conteudo.
if (texto == ""){
    console.log("A string é vazia.");
} else {
    console.log("A string é:", texto);
}


//se um numero é maior que 10. caso não, multiplique por 2.
if (num > 10){
    console.log(num);
} else {
    console.log(num*2);
}


//se uma variavel é do tipo booleano. caso não, atribuir um valor booleano a ela.
if (num = true){
    console.log((typeof num) == "boolean");
} else {
    console.log("A variavel é:", typeof num);
}