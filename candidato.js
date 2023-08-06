/*O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto
ao invés de número, o código deve retornar uma mensagem para votar novamente.
Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos.*/
const candidato = {
    x: 889,
    y: 847,
    z: 515,
    branco: 0
};
prompt('Qual seu voto?');
prompt('Deseja finalizar a votação?');
function votacao(resultado){
   if (voto = branco || voto != candidato){
    voto = null;
}
if (voto ==='string'){
    alert ('Inválido. Vote novamente:');
}
} 
resultado = candidato.x;
var voto = candidato.x;
alert('O candidato X teve: ' +voto, 'votos');
 var voto = candidato.y;
alert('O candidato Y teve: ' +voto, 'votos');
 var voto = candidato.z;
alert('O candidato Z teve: ' +voto, 'votos');
 var voto = candidato.branco;
alert('Votos brancos: ' +voto, 'votos');
 var voto = candidato.null;
alert('Votos nulos: ' +voto, 'votos');