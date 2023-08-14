/*Crie uma lista encadeada em que cada elemento representa uma pessoa. Ela precisa conter informações
como nome, idade e referência ao filho dela.*/

function No(valor) {
    this.valor = valor;
    this.proximo = null;
  }
  
  function inserirInicio(lista, valor) {
    var novo = new No(valor);
    if (novo) {
      novo.proximo = lista;
      lista = novo;
    } else {
      console.log("Erro ao alocar memória");
    }
    return lista;
  }
  
  function imprimirLista(lista) {
    var aux = lista;
    while (aux !== null) {
      console.log(aux.valor + " |");
      aux = aux.proximo;
    }
  }
  
  var Lista = null;
  Lista = inserirInicio(Lista, 'Bela Gil, 35 anos, Filha');
  Lista = inserirInicio(Lista, 'Preta Gil, 49 ano, Filha');
  Lista = inserirInicio(Lista,'Gilberto Gil, 80 anos, Pai');
  imprimirLista(Lista);
  





// class familiaGil {
//     constructor() {
//         this.cabeca = null;
//     }

//     //Inicio (Push)
//     addFirst(Gilberto){
//         const novoNo = new No (81)
//         novoNo.proximo = this.cabeca;
//         this.cabeca = novoNo;
//     }   
        
// }
// console.log(familiaGil);