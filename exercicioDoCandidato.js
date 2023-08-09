/*O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto
ao invés de número, o código deve retornar uma mensagem para votar novamente.
Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos.*/
voto = typeof NaN;
const candidato = {
    x: 889,
    y: 847,
    z: 515,
    branco: 0
};
while (true) {
    try{
        let voto = parseInt(prompt('Vote no numero do candidato:'));
        if (voto != 889 || voto != 847 || voto != 515 || voto != 0){
            voto = null;
        }
        if (voto = String){
            throw Error ('Digite só números:');
        }
    let finalizarVoto = prompt('Deseja finalizar a votação? Sim ou Não:');
        
        switch (finalizarVoto) {
            case 'Sim' || 'sim' || 'S' || 's':
                alert('Votação encerrada.');
                break;
            case 'Não':
                alert('Ok.');
                break;
        }
        } catch (e) {
            alert('Digite apenas números.');
        }
}