//2 objetos materiais:
class carro {
    constructor(marca, modelo, portas){
    this.marca = marca;
    this.modelo = modelo;
    this.portas = portas;
    }
    
    liga(){
        console.log('O carro está ligado.');
    }
    
    acelera(){
        console.log('O carro está acelerando.');
    }
    
    verificaPortas(){
        console.log(`O carro ${this.modelo} da ${this.marca} possui ${this.portas} portas.`);
    }
    }
    const exemploCarro = new carro ('Honda', 'Civic', 4);
    exemploCarro.liga();
    exemploCarro.acelera();
    exemploCarro.verificaPortas();
    
    class escola {
    constructor(aluno, professor, cursos){
    this.aluno = aluno;
    this.professor = professor;
    this.cursos = cursos;
    }
        
    matriculaAluno(){
        console.log(`O aluno ${this.aluno} está matriculado.`);
    }
    
    contrataProfessor(){
        console.log(`O professor ${this.professor} está contratado.`);
    }
    
    verificaCurso(){
        console.log(`O curso ${this.cursos} existe na escola.`);
    }
}
const exemploEscola = new escola ('Antonio', 'Beatriz', 'Português');
exemploEscola.matriculaAluno();
exemploEscola.contrataProfessor();
exemploEscola.verificaCurso();

    //2 objetos abstratos:
class agenda {
    constructor (nome, telefone, email){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.contatos = [];
    }

adicionaContato(){
    let novoContato = {
    nome: this.nome,
    telefone: this.telefone,
    email: this.email,
    };
    this.contatos.push(novoContato);
    console.log(`Contato ${this.nome} adicionado à agenda.`);
    }

excluiContato(nome){
    let encontraContato = false;
    for (let i = 0; i < this.contatos.length; i++){
        if (this.contatos[i].nome === nome) {
            this.contatos.splice (i,1);
            console.log(`Contato ${nome} excluído da agenda.`);
            encontraContato = true;
            break;
        }
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
        for (let agenda of this.contatos){
            console.log(`Nome: ${agenda.nome}`);
            console.log(`Telefone: ${agenda.telefone}`);
            console.log(`Email: ${agenda.email}`);
        }
        }
    }
}
const exemploAgenda = new agenda ("Rebeca", "963258741", "rm@rm.com");
exemploAgenda.adicionaContato("Wagner", "963258749", "wg@wg.com");
exemploAgenda.excluiContato("Wagner");
exemploAgenda.listaContato();