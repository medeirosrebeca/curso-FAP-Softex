/*O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não
corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto
ao invés de número, o código deve retornar uma mensagem para votar novamente. Quando a votação for
finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a
quantidade de votos de cada candidato, os brancos e nulos.*/
var readlineSync = require('readline-sync')
let candidatoX = 0;
        let candidatoY = 0;
        let candidatoZ = 0;
        let candidatoNulo = 0;
while (true) {
    try{
        let votoCandidato = readlineSync.question('Vote no numero do candidato:');
        if (isNaN(votoCandidato)) {
            throw Error ('Digite só números');
        }
        if (votoCandidato == 889){
            candidatoX = candidatoX + 1;
        } else if (votoCandidato == 847){
            candidatoY = candidatoY + 1; 
        } else if (votoCandidato == 515){
            candidatoZ = candidatoZ + 1;
        } else if (votoCandidato == 0){
            candidatoNulo = candidatoNulo + 1;
        } else if (votoCandidato != 889 && votoCandidato != 847 && votoCandidato != 515){
            candidatoNulo = candidatoNulo + 1;
        } 
    } catch (e) {
        console.log('Digite apenas números.');
    }

    try {
        let finalizarVoto = readlineSync.question('Deseja finalizar a votação? Digite S para Encerrar a Eleição ou N para Continuar a Eleição:');
        if (finalizarVoto != 'S'){
            throw Error ('Digite novamente:');
        }
        console.log(`O Candidato X teve ${candidatoX} votos. O Candidato Y teve ${candidatoY} votos.
            O Candidato Z teve ${candidatoZ} votos. Votos Brancos ou Nulos: ${candidatoNulo}`);
            
        if (finalizarVoto = 'S'){
            if (candidatoX > candidatoY || candidatoX > candidatoZ || candidatoX > candidatoNulo){
                console.log('O Candidato X foi o que teve mais votos.');
            } else if (candidatoY > candidatoZ || candidatoY > candidatoNulo){
                console.log('O Candidato Y foi o que teve mais votos.');
            } else if (candidatoZ > candidatoNulo){
                console.log('O Candidato Z foi o que teve mais votos.');
            } else {
                console.log('Tiveram mais votos brancos e nulos.');
            }
        } break;
    } catch (e) {
            console.log('Digite novamente o número do seu candidato:');   
        }
}