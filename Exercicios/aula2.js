var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*1. Crie uma classe Pessoa com os atributos nome, idade e email.*/
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    return Pessoa;
}());
var pessoa1 = new Pessoa("Rebeca", 34, "rm@rm.com");
console.log(pessoa1);
/*2. Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula.*/
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, idade, email, matricula) {
        var _this = _super.call(this, nome, idade, email) || this;
        _this.matricula = matricula;
        return _this;
    }
    return Aluno;
}(Pessoa));
var pessoa2 = new Aluno("Wagner", 33, "wg@wg.com", 1345);
/*3. Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular a área e o
perímetro.*/
var Retangulo = /** @class */ (function () {
    function Retangulo(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    Retangulo.prototype.calcularArea = function () {
        console.log("A \u00E1rea \u00E9: ".concat(this.largura, " x ").concat(this.altura));
    };
    Retangulo.prototype.calcularPerimetro = function () {
        console.log("O per\u00EDmetro \u00E9: (".concat(this.largura, " + ").concat(this.altura, ") x 2"));
    };
    return Retangulo;
}());
var retangulo1 = new Retangulo(4, 5);
retangulo1.calcularArea();
retangulo1.calcularPerimetro();
/*4. Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a circunferência.*/
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        console.log("A \u00E1rea do c\u00EDrculo \u00E9: Math.PI x ".concat(this.raio, " x ").concat(this.raio));
    };
    Circulo.prototype.calcularCircunferencia = function () {
        console.log("A circunfer\u00EAncia do c\u00EDrculo \u00E9: 2 x Math.PI x ".concat(this.raio));
    };
    return Circulo;
}());
var circulo = new Circulo(10);
circulo.calcularArea();
circulo.calcularCircunferencia();
/*5. Crie uma classe ContaBancaria com os atributos saldo e numeroConta e métodos para depositar,
sacar e verificar o saldo.*/
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldo, numeroConta) {
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }
    ContaBancaria.prototype.depositar = function () {
        console.log("Valor depositado: ");
    };
    ContaBancaria.prototype.sacar = function () {
        console.log("Valor sacado: ");
    };
    ContaBancaria.prototype.verSaldo = function () {
        console.log("Saldo atual: ");
    };
    return ContaBancaria;
}());
var conta = new ContaBancaria(100, 123);
conta.depositar();
conta.sacar();
conta.verSaldo();
/*1. Crie uma classe Produto com os atributos nome, preco e quantidade e métodos para calcular o
valor total (preço * quantidade).*/
var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularTotal = function () {
        console.log("O valor total \u00E9: ".concat(this.preco, " x ").concat(this.quantidade));
    };
    return Produto;
}());
var fruta = new Produto('banana', 3.00, 6);
fruta.calcularTotal();
/*2. Crie uma classe Triangulo com os atributos lado1, lado2 e lado3 e um método para verificar se é
um triângulo válido.*/
var Triangulo = /** @class */ (function () {
    function Triangulo(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    Triangulo.prototype.valido = function () {
        console.log("O triangulo \u00E9 valido.");
    };
    return Triangulo;
}());
var objeto = new Triangulo(8, 2, 4);
objeto.valido();
/*3. Crie uma classe Livro com os atributos titulo, autor e anoPublicacao e um método para exibir
informações do livro.*/
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.informacao = function () {
        console.log("O livro ".concat(this.titulo, " \u00E9 de ").concat(this.autor, " e seu ano ").concat(this.anoPublicacao, ". "));
    };
    return Livro;
}());
var livro = new Livro("Harry Potter: A Pedra Filosofal", "J. K. Rowling", 1998);
livro.informacao();
/*4. Crie uma classe Agenda que permite adicionar, listar e remover contatos (nomes e números de
telefone).*/
var Agenda = /** @class */ (function () {
    function Agenda(nome, numeroTelefone) {
        this.nome = nome;
        this.numeroTelefone = numeroTelefone;
    }
    return Agenda;
}());
/*5. Crie uma classe CarroEsportivo que herda da classe Carro (usada no exemplo anterior) e tenha
métodos adicionais para acelerar rapidamente e produzir um som esportivo.*/
var Carro = /** @class */ (function () {
    // Método construtor
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // Método
    Carro.prototype.acelerar = function () {
        console.log("Acelerando o carro...");
    };
    return Carro;
}());
var CarroEsportivo = /** @class */ (function (_super) {
    __extends(CarroEsportivo, _super);
    function CarroEsportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarroEsportivo.prototype.acelerarRapido = function () {
    };
    CarroEsportivo.prototype.reproduzirSim = function () {
    };
    return CarroEsportivo;
}(Carro));
