// /*1. Crie uma classe Pessoa com os atributos nome, idade e email.*/
// class Pessoa {
//     nome: string;
//     idade: number;
//     email: string;

// constructor (nome: string, idade: number, email: string) {
//     this.nome = nome;
//     this.idade = idade;
//     this.email = email;
// }
// }

// let pessoa1 = new Pessoa ("Rebeca", 34, "rm@rm.com");

// console.log(pessoa1);


// /*2. Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula.*/
// class Aluno extends Pessoa {
// matricula: number;

// constructor (nome: string, idade: number, email: string, matricula: number) {
//     super (nome, idade, email);
//     this.matricula = matricula;
// }
// }
// let pessoa2 = new Aluno ("Wagner", 33, "wg@wg.com", 1345);


// /*3. Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular a área e o
// perímetro.*/
// class Retangulo {
//     largura: number;
//     altura: number;

// constructor (largura: number, altura: number) {
//     this.largura = largura;
//     this.altura = altura;
// }

// calcularArea(): void {
//     console.log(`A área é: ${this.largura} x ${this.altura}`);
// }

// calcularPerimetro(): void {
//     console.log(`O perímetro é: (${this.largura} + ${this.altura}) x 2`);
    
// }
// }

// let retangulo1 = new Retangulo(4,5);
// retangulo1.calcularArea();
// retangulo1.calcularPerimetro();


// /*4. Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a circunferência.*/
// class Circulo {
//     raio: number;

// constructor (raio: number){
// this.raio = raio;
// }
// calcularArea():void {
//     console.log(`A área do círculo é: Math.PI x ${this.raio} x ${this.raio}`);
    
// }
// calcularCircunferencia(): void {
//     console.log(`A circunferência do círculo é: 2 x Math.PI x ${this.raio}`);
// }
// }
// let circulo = new Circulo (10);
// circulo.calcularArea();
// circulo.calcularCircunferencia();

// /*5. Crie uma classe ContaBancaria com os atributos saldo e numeroConta e métodos para depositar, 
// sacar e verificar o saldo.*/
// class ContaBancaria{
//     saldo: number;
//     numeroConta: number;

// constructor (saldo: number, numeroConta: number){
//     this.saldo = saldo;
//     this.numeroConta = numeroConta;
// }
// depositar(): void {
//     console.log(`Valor depositado: `);
    
// }

// sacar(): void {
//     console.log(`Valor sacado: `);

// }

// verSaldo(): void {
//     console.log(`Saldo atual: `);

// }
// }
// let conta = new ContaBancaria (100, 123)
// conta.depositar();
// conta.sacar();
// conta.verSaldo();

// /*1. Crie uma classe Produto com os atributos nome, preco e quantidade e métodos para calcular o
// valor total (preço * quantidade).*/
// class Produto {
//     nome: string;
//     preco: number;
//     quantidade: number;
// constructor (nome: string, preco: number, quantidade: number){
//     this.nome = nome;
//     this.preco = preco;
//     this.quantidade = quantidade;
// }
// calcularTotal (): void {
//     console.log(`O valor total é: ${this.preco} x ${this.quantidade}`);
    
// }    
// }
// let fruta = new Produto ('banana', 3.00,6)
// fruta.calcularTotal();

// /*2. Crie uma classe Triangulo com os atributos lado1, lado2 e lado3 e um método para verificar se é
// um triângulo válido.*/
// class Triangulo {
//     lado1: number;
//     lado2: number;
//     lado3: number;
// constructor (lado1: number, lado2: number, lado3: number){
//     this.lado1 = lado1;
//     this.lado2 = lado2;
//     this.lado3 = lado3
// }
// valido(){
//     console.log(`O triangulo é valido.`);
    
// }
// }
// let objeto = new Triangulo (8,2,4);
// objeto.valido()


// /*3. Crie uma classe Livro com os atributos titulo, autor e anoPublicacao e um método para exibir 
// informações do livro.*/
// class Livro{
//     titulo: string;
//     autor: string;
//     anoPublicacao: number;
// constructor(titulo: string, autor: string, anoPublicacao: number){
// this.titulo = titulo;
// this.autor = autor;
// this.anoPublicacao = anoPublicacao;
// }
// informacao(){
//     console.log(`O livro ${this.titulo} é de ${this.autor} e seu ano ${this.anoPublicacao}. `);
    
// }
// }
// let livro = new Livro("Harry Potter: A Pedra Filosofal", "J. K. Rowling", 1998);
// livro.informacao();

// /*4. Crie uma classe Agenda que permite adicionar, listar e remover contatos (nomes e números de
// telefone).*/
// class Agenda {
//     nome: string;
//     numeroTelefone: number;
// constructor (nome: string, numeroTelefone: number){
//     this.nome = nome;
//     this.numeroTelefone = numeroTelefone;
// }
// }

// /*5. Crie uma classe CarroEsportivo que herda da classe Carro (usada no exemplo anterior) e tenha
// métodos adicionais para acelerar rapidamente e produzir um som esportivo.*/
// class Carro {
//     // Atributos
//     marca: string;
//     modelo: string;
//     ano: number;
//     // Método construtor
//     constructor(marca: string, modelo: string, ano: number) {
//       this.marca = marca;
//       this.modelo = modelo;
//       this.ano = ano;
//     }
//     // Método
//     acelerar() {
//       console.log("Acelerando o carro...");
//     }
//   }
  

// class CarroEsportivo extends Carro {
//     acelerarRapido(): void {

//     }

//     reproduzirSim(): void {
        
//     }
// }