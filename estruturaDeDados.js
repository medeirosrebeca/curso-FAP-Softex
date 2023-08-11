/* Considere o array [3, 7, 9, 1, 0]. O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim
por diante, seguindo a ordem. Levando em conta as três estruturas de dados (fila, lista e pilha) e as
suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las
completamente utilizando o array mencionado?*/

// 1. Fila:
// const fila = [3, 7, 9, 1, 0];
// while ((remover = fila.shift()) !== undefined) {
//     console.log(remover);
// }

// 2. Lista:
const lista = [3, 7, 9, 1, 0];
function removerNumeroEspecifico(numero){
    const indice = lista.indexOf(numero);
    if (indice !== -1){
        lista.splice(indice, 1);
        return true;
    } else {
        return false;
    }
}
removerNumeroEspecifico (9); //
console.log(lista); // A lista mostra com o numero escolhido removido.

//3. Pilha:
// const pilha = [3, 7, 9, 1, 0];
// while ((remover = pilha.pop()) !== undefined) {
//     console.log(remover);
// }