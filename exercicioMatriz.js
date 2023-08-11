/* Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar
informações sobre animais e as suas características. Cada linha deve representar um animal e cada coluna
terá as diferentes informações sobre ele, como nome, espécie e idade.*/

let animais = [
    ['Major', 'Cão', '1'], //1 linha: 
    ['Simba', 'Leão', '10'], //2 linha: 
    ['Filomena', 'Tartaruga', '50'] //3 linha:
];


for (let contarLinha = 0; contarLinha < animais.length; contarLinha++) {
    for (let contarColuna = 0; contarColuna < animais[contarLinha].length; contarColuna++) {
        console.log(animais[contarLinha][contarColuna]);
    }
}