// //2 objetos materiais:
// class carro {
//     constructor(marca, modelo, portas){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.portas = portas;
//     }
    
//     liga(){console.log('O carro está ligado.');}
//     acelera(){console.log('O carro está acelerando.');}
//     verificaPortas(){console.log(`O carro ${this.modelo} da ${this.marca} possui ${this.portas} portas.`);}
// }
// const exemploCarro = new carro ('Honda', 'Civic', 4);
// exemploCarro.liga();
// exemploCarro.acelera();
// exemploCarro.verificaPortas();
    
// class escola {
//     constructor(aluno, professor, cursos){
//     this.aluno = aluno;
//     this.professor = professor;
//     this.cursos = cursos;
//     }
        
//     matriculaAluno(){console.log(`O aluno ${this.aluno} está matriculado.`);}
//     contrataProfessor(){console.log(`O professor ${this.professor} está contratado.`);}
//     verificaCurso(){console.log(`O curso ${this.cursos} existe na escola.`);}
// }
// const exemploEscola = new escola ('Antonio', 'Beatriz', 'Português');
// exemploEscola.matriculaAluno();
// exemploEscola.contrataProfessor();
// exemploEscola.verificaCurso();


    //2 objetos abstratos:
class agenda {
    constructor (nome, telefone, email){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.contatos = [];
    }

adicionaContato(nome, telefone, email){
    let novoContato = {
    Nome: nome,
    Telefone: telefone,
    Email: email
    } 
    this.contatos.push(novoContato);
    console.log(`Contato ${nome} adicionado à agenda.`);}

excluiContato(nome){
    let encontraContato = false;
    for (let i = 0; i < this.contatos.length; i++){
        if (this.contatos[i].Nome === nome) {
            this.contatos.splice (i,1);
            console.log(`Contato ${nome} excluído da agenda.`);
            encontraContato = true;
            break;}
    }
    if (!encontraContato) {
        console.log(`Contato ${nome} não encontrado na agenda.`);
    }
}

listaContato(){
    if (this.contatos.length ===0){
        console.log ("Agenda vazia.");
    } else {
        console.log('Lista de contatos:');
        for (let contato of this.contatos){
            console.log(`Nome: ${contato.Nome}`);
            console.log(`Telefone: ${contato.Telefone}`);
            console.log(`Email: ${contato.Email}`);
        }
        }
    }
}
const exemploAgenda = new agenda ();
exemploAgenda.adicionaContato("Wagner", "98565485", "wg@wg.com");
exemploAgenda.adicionaContato("Rebeca", "963258741", "rm@rm.com");
exemploAgenda.excluiContato("Rebeca");
exemploAgenda.listaContato();