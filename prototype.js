// Classe abstrata Veiculo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    clone() {
      return new this.constructor(this);
    }
  
    represent() {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
    }
  }
  
  // Subclasse Carro
  class Carro extends Veiculo {
    constructor(original) {
      super(original.modelo, original.marca, original.cor, original.numeroRodas);
      this.numeroPortas = original.numeroPortas;
    }
  
    clone() {
      return new Carro(this);
    }
  }
  
  // Subclasse Moto
  class Moto extends Veiculo {
    constructor(original) {
      super(original.modelo, original.marca, original.cor, original.numeroRodas);
      this.estilo = original.estilo;
    }
  
    clone() {
      return new Moto(this);
    }
  }
  
  // Classe Aplicação
  class Aplicacao {
    constructor() {
      this.veiculos = [];
    }
  
    criarVeiculos() {
      const carroPrototype = new Carro({ modelo: 'Civic', marca: 'Honda', cor: 'Preto', numeroRodas: 4, numeroPortas: 4 });
      const motoPrototype = new Moto({ modelo: 'CBR600RR', marca: 'Honda', cor: 'Vermelho', numeroRodas: 2, estilo: 'Esportiva' });
  
      this.veiculos.push(
        carroPrototype.clone(),
        carroPrototype.clone(),
        new Carro({ modelo: 'Gol', marca: 'Volkswagen', cor: 'Azul', numeroRodas: 4, numeroPortas: 2 }),
        motoPrototype.clone(),
        motoPrototype.clone(),
        new Moto({ modelo: 'Harley-Davidson', marca: 'Harley', cor: 'Preto', numeroRodas: 2, estilo: 'Custom' })
      );
    }
  
    representarVeiculos() {
      this.veiculos.forEach(veiculo => {
        console.log(veiculo.represent());
      });
    }
  }
  
  // Exemplo de uso
  const aplicacao = new Aplicacao();
  aplicacao.criarVeiculos();
  aplicacao.representarVeiculos();
  