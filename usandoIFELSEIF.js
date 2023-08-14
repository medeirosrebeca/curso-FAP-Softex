var num, texto;
num = 4;
texto = "Olá!";

//identificar numero negativo, zero ou positivo
if (num > 0){
    console.log("O numero é positivo.");
} else if (num < 0) { 
    console.log("O numero é negativo.");    
} else {
    console.log("O numero é zero.");
}


//um numero é divisivel por 2, 3 ou 5.
if (num%2 === 0) {
    console.log("O numero é divisivel por 2.");
} if (num%3 == 0) { 
    console.log("O numero é divisivel por 3.");    
} if (num%5 === 0) {
    console.log("O numero é divisivel por 5.");
}



//uma variavel em quatro categorias: booleana, numerica, string ou indefinida.
let variavel;
   variavel = "texto";
if (typeof variavel === "boolean"){
    console.log("A variavel é booleana.");
} else if (typeof variavel === "string") { 
    console.log("A variavel é uma string.");    
} else {
    console.log("A variavel é indefinida.");
}



//uma variavel em cinco categorias: negativo, zero, positivo, par ou impar.
let numero = 5;
if (numero <0){
    console.log("O numero é negativo.");
} else if (numero > 0) { 
    console.log("O numero é positivo.");    
} else {
    console.log("O numero é zero.");
} if (numero % 2 === 0){
    console.log("O numero é par.");
} else {
    console.log("O numero é impar.");
}


//um numero é divisivel por 2,3, 5 ou 7
let numer;
numer = 19;
if (numer%2 === 0 && numer%3 === 0 && numer%5 === 0 && numer%7 ===0){
    console.log("O numero é divisivel por 2, 3, 5 e 7.");
} else if (numer%2 === 0 && numer%3 === 0){ 
    console.log("O numero é divisivel por 2 e 3.");
} else if (numer%2 === 0 && numer%5 === 0){
    console.log("O numero é divisivel por 2 e 5.");
} else if (numer%2 === 0 && numer%7 === 0){
    console.log("O numero é divisivel por 2 e 7.");
} else if (numer%3 === 0 && numer%5 === 0){
    console.log("O numero é divisivel por 3 e 5.");
} else if (numer%3 === 0 && numer%7 === 0){
    console.log("O numero é divisivel por 3 e 7.")
} else if (numer%5 === 0 && numer%7 === 0){
    console.log("O numero é divisivel por 5 e 7.")
} else if (numer%2 === 0){
    console.log("O numero é divisivel por 2.");
} else if ((numer%3 === 0)){
    console.log("O numero é divisivel por 3.")
} else if (numer%5 === 0) {
    console.log("O numero é divisivel por 5.");
} else if (numer%7 === 0){
    console.log("O numero é divisivel por 7.")
} else {
    console.log("O numero não é divisivel por 2,3,5 e 7.");
}