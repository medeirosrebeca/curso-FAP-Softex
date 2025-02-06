// Interface comum para computadores
class Computador {
    constructor(ram, hdd, cpu, type) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
      this.type = type;
    }
  
    toString() {
      return `RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz, Type: ${this.type}`;
    }
  }
  
  // Fábrica para criar instâncias de computadores com base no tipo
  class ComputadorFactory {
    criarComputador(type, ram, hdd, cpu) {
      if (type === 'pc') {
        return new PC(ram, hdd, cpu);
      } else if (type === 'servidor') {
        return new Servidor(ram, hdd, cpu);
      } else {
        throw new Error('Tipo de computador não suportado');
      }
    }
  }
  
  // Implementação para computador tipo PC
  class PC extends Computador {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'PC');
    }
  }
  
  // Implementação para computador tipo Servidor
  class Servidor extends Computador {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'Servidor');
    }
  }
  
  // Exemplo de uso
  const computadorFactory = new ComputadorFactory();
  
  const meuPC = computadorFactory.criarComputador('pc', 8, 500, 2.5);
  const meuServer = computadorFactory.criarComputador('servidor', 16, 1000, 3.0);
  
  console.log(meuPC.toString());
  console.log(meuServer.toString());
  