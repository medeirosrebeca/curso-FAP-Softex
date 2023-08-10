/*O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não
corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto
ao invés de número, o código deve retornar uma mensagem para votar novamente. Quando a votação for
finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a
quantidade de votos de cada candidato, os brancos e nulos.*/
var readlineSync = require('readline-sync')

let votoFinal = {
    x: 0,
    y: 0,
    z: 0,
    branco: 0
}
while (true) {
    try{
        let votoCandidato = readlineSync.questionInt('Vote no numero do candidato:');
            if (votoCandidato != 889 || votoCandidato != 847 || votoCandidato != 515 || votoCandidato != 0){
                votoFinal = 'null'; //VER AQUI!!!!******
            }
            if (votoCandidato = 889){
                votoFinal.x = votoFinal.x + 1;
            }
            if (votoCandidato = 847){
                 votoFinal.y = votoFinal.y + 1;
            }
            if (votoCandidato = 515){
                 votoFinal.z = votoFinal.z + 1;
            }
            if (votoCandidato = 0){
                 votoFinal.branco = votoFinal.branco + 1;
            }
    } catch (e) {
        alert('Digite apenas números.');
    }
    
    try {
    let resultadoX = votoFinal.x; //VER AQUII!!!****
    let finalizarVoto = readlineSync.question('Deseja finalizar a votação? Digite Sim ou Não:');
        if (finalizarVoto != 'Sim'){
            throw Error ('Digite o seu candidato:');
        }
        if  (finalizarVoto = 'Sim') {
            console.log (`O candidato X teve: ${resultadoX}, O candidato Y teve: , O candidato Z teve: , Votos Brancos: `);
            break; //VER AQUII!!!!!*******
            }
        } catch (e) {
            console.log('Digite novamente o número do seu candidato:');   
            }
    
}