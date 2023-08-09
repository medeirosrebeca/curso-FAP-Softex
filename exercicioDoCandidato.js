/*O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não
corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto
ao invés de número, o código deve retornar uma mensagem para votar novamente. Quando a votação for
finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade
de votos de cada candidato, os brancos e nulos.*/

let votoFinal;
const candidato = {
    x: 889,
    y: 847,
    z: 515,
    branco: 0
};
while (true) {
    try{
        let votoCandidato = parseInt(prompt('Vote no numero do candidato:'));
            if (votoCandidato != 889 && votoCandidato != 847 && votoCandidato != 515 && votoCandidato != 0){
            votoCandidato = null;
            }
            if (votoCandidato = 889){
            candidato.x;
            }
            if (votoCandidato = 847){
            candidato.y;
            }
            if (votoCandidato = 515){
            candidato.z;
            }
            if (votoCandidato = 0){
            candidato.branco;
            }
    } catch (e) {
        alert('Digite apenas números.');
    }
    try {
    let finalizarVoto = prompt('Deseja finalizar a votação? Digite Sim ou Não:');
        if (finalizarVoto != 'Sim'){
            throw Error ('Digite o seu candidato:');
        }
        if  (finalizarVoto = 'Sim') {
            console.log ('O candidato com maior votos foi:' + votoFinal);
            break;
            }
        } catch (e) {
            console.log('Digite novamente o número do seu candidato:');   
            }
}