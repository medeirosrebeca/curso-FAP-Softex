class Computador {
    algumaOperacao() {
        const produto = this.factoryMethod();
        return `Computador: ${produto.operation()}`;
    }
}
class ComputadorReal extends Computador {
    factoryMethod() {
        return new ProdutoConcreto1();
    }
}
class ComputadorReal2 extends Computador {
    factoryMethod() {
        return new ProdutoConcreto2();
    }
}
class ProdutoConcreto1 {
    operation() {
        return '{Resultado do ProdutoConcreto1}';
    }
}
class ProdutoConcreto2 {
    operation() {
        return '{Resultado do ProdutoConcreto2}';
    }
}
function clienteCodar(creator) {
    console.log('Cliente: Não conheço a classe do criador, mas ainda funciona.');
    console.log(creator.algumaOperacao());
}
console.log('App: Lançado com o ProdutoConcreto1.');
clienteCodar(new ComputadorReal());
console.log('');
console.log('App: Lançado com o ProdutoConcreto2.');
clienteCodar(new ComputadorReal2());
