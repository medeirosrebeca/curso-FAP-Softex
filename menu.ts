abstract class Computador {
    public abstract factoryMethod(): Produto;

    public  algumaOperacao(): string {
        const produto = this.factoryMethod();
        return `Computador: ${produto.operation()}`;
    }
}

class ComputadorReal extends Computador { 
    public factoryMethod(): Produto { 
        return new ProdutoConcreto1() ;
    }
}

class ComputadorReal2 extends Computador {
    public factoryMethod(): Produto {
        return new ProdutoConcreto2() ; 
    }
} 

interface Produto { 
    operation(): string;
}

class ProdutoConcreto1 implements Produto {
    public operation(): string {
        return '{Resultado do ProdutoConcreto1}';
    }
}

class ProdutoConcreto2 implements Produto {
    public operation(): string {
        return '{Resultado do ProdutoConcreto2}';
    }
}

function  clienteCodar (creator: Computador ) {
    console.log ('Cliente: Não conheço a classe do criador, mas ainda funciona.') ; 
    console.log (creator.algumaOperacao());  
} 

console.log('App: Lançado com o ProdutoConcreto1.');
clienteCodar(new ComputadorReal());
console.log('');

console.log('App: Lançado com o ProdutoConcreto2.');
clienteCodar(new ComputadorReal2());