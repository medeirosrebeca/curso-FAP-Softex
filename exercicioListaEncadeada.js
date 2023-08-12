/*Crie uma lista encadeada em que cada elemento representa uma pessoa. Ela precisa conter informações
como nome, idade e referência ao filho dela.*/

class familiaGil {
    constructor() {
        this.cabeca = null;
    }

    //Inicio (Push)
    addFirst(Gilberto){
        const novoNo = new No (81)
        novoNo.proximo = this.cabeca;
        this.cabeca = novoNo;
    }   
        
}
console.log(familiaGil);