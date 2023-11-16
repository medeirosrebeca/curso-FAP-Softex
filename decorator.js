/*Aplicar o padrão decorator para criar um sanduiche de frango assado com pepperoni e queijo mussarela
ralado. O projeto deve seguir os seguintes critérios:
- deve imprimir no console: Sanduíche de Frango, Pepperoni, QueijoMussarelaRalado custa $7,49.
- o sanduíche de frango assado custa $4,50. 
- o ingrediente adicional pepperoni custa $0,99.
- o ingrediente adicional queijo mussarela ralado custa $2,00.
- crie as classes necessárias: FrangoAssado, Pepperoni e Queijo MussarelaRalado.*/

class Sanduiche {
    constructor() {
      this.descricao = 'Sanduíche de Carne';
      this.custo = 4.50;
    }
  
    obterCusto() {
      return this.custo;
    }
  
    obterDescricao() {
      return this.descricao;
    }
  }

  class IngredienteDecorator extends Sanduiche {
    constructor(sanduiche) {
      super();
      this.sanduiche = sanduiche;
    }
  
    obterCusto() {
      return this.sanduiche.obterCusto() + this.custo;
    }
  
    obterDescricao() {
      return `${this.sanduiche.obterDescricao()}, ${this.descricao}`;
    }
  }

  class FrangoAssado extends Sanduiche {
    constructor() {
      super();
      this.descricao = 'Frango Assado';
      this.custo = 4.50;
    }
  }
  
  class Pepperoni extends IngredienteDecorator {
    constructor(sanduiche) {
      super(sanduiche);
      this.descricao = 'Pepperoni';
      this.custo = 0.99;
    }
  }
  
  class QueijoMussarelaRalado extends IngredienteDecorator {
    constructor(sanduiche) {
      super(sanduiche);
      this.descricao = 'Queijo Mussarela Ralado';
      this.custo = 2.00;
    }
  }

  const sanduiche = new QueijoMussarelaRalado(new Pepperoni(new FrangoAssado()));

console.log(`${sanduiche.obterDescricao()} custa $${sanduiche.obterCusto().toFixed(2)}.`);
