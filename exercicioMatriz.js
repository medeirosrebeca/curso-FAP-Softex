/* Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar
informações sobre animais e as suas características. Cada linha deve representar um animal e cada coluna
terá as diferentes informações sobre ele, como nome, espécie e idade.*/

let animais = [
    ['Cachorro', 'American Staffordshire Terrier', '1'], //1 linha: 
    ['Leão', 'P. Leo', '10'], //2 linha: 
    ['Tartaruga', 'Tartaruga-cabeçuda', '50'] //3 linha:
];


for (let contarLinha = 0; contarLinha < animais.length; contarLinha++) {
    for (let contarColuna = 0; contarColuna < animais[contarLinha].length; contarColuna++) {
        console.log(animais[contarLinha][contarColuna]);
    }
}