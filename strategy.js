// Interface Strategy
class Operacao {
    execute(valor1, valor2) {}
  }
  
  // Implementações concretas de Strategy
  class Soma extends Operacao {
    execute(valor1, valor2) {
      return valor1 + valor2;
    }
  }
  
  class Subtracao extends Operacao {
    execute(valor1, valor2) {
      return valor1 - valor2;
    }
  }
  
  class Multiplicacao extends Operacao {
    execute(valor1, valor2) {
      return valor1 * valor2;
    }
  }
  
  // Contexto que utiliza a Strategy
  class Calculadora {
    constructor(operacao) {
      this.operacao = operacao;
    }
  
    calcular(valor1, valor2) {
      return this.operacao.execute(valor1, valor2);
    }
  }
  
  // Função para obter a estratégia com base na operação informada
  function obterEstrategia(operacao) {
    switch (operacao) {
      case 'soma':
        return new Soma();
      case 'subtracao':
        return new Subtracao();
      case 'multiplicacao':
        return new Multiplicacao();
      default:
        throw new Error('Operação não suportada');
    }
  }
  
  // Exemplo de uso
  const readline = require('readline-sync');
  
  const primeiroValor = parseInt(readline.question('Digite o primeiro valor: '));
  const segundoValor = parseInt(readline.question('Digite o segundo valor: '));
  const operacao = readline.question('Digite a operação (soma, subtracao, multiplicacao): ');
  
  const estrategia = obterEstrategia(operacao);
  const calculadora = new Calculadora(estrategia);
  
  const resultado = calculadora.calcular(primeiroValor, segundoValor);
  
  console.log(`Resultado da ${operacao}: ${resultado}`);
  