/* Considere o array [3, 7, 9, 1, 0]. O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim
por diante, seguindo a ordem. Levando em conta as três estruturas de dados (fila, lista e pilha) e as
suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las
completamente utilizando o array mencionado?*/

// 1. Fila:
const fila = [3, 7, 9, 1, 0];
function desenfileirar (){
    if (fila == ""){
        return null;
    }
    return fila.shift();
}
console.log(desenfileirar());

// 2. Lista:
const lista = [3, 7, 9, 1, 0];

function remover(){
    const elemento = elemento.indexOf();
    if (elemento !== 1){
        lista.splice(elemento, 1);
        return true;
    } else {
        return false;
    }
}
remover ();
console.log(lista);

//3. Pilha:
const pilha = [3, 7, 9, 1, 0];

function desempilhar (){
    if (vazia()){
        return null;
    }
    return pilha.pop();
}
desempilhar();
console.log(tamanho());