// Interface comum para computadores
interface Computador {
    obterRAM(): number;
    obterHDD(): number;
    obterCPU(): number;
    obterTipo(): string;
    toString(): string;
}

// Implementações de computadores concretos
class PC extends Computador {
    constructor(private ram: number, private hdd: number, private cpu: number) {}

    obterRAM(): number {
        return this.ram;
    }

    obterHDD(): number {
        return this.hdd;
    }

    obterCPU(): number {
        return this.cpu;
    }

    obterTipo(): string {
        return "PC";
    }

    toString(): string {
        return `Tipo: ${this.obterTipo()}, RAM: ${this.obterRAM()} GB, HDD: ${this.obterHDD()} GB, CPU: ${this.obterCPU()} GHz`;
    }
}

class Servidor extends Computador{
    constructor(private ram: number, private hdd: number, private cpu: number) {}

    obterRAM(): number {
        return this.ram;
    }

    obterHDD(): number {
        return this.hdd;
    }

    obterCPU(): number {
        return this.cpu;
    }

    obterTipo(): string {
        return "Servidor";
    }

    toString(): string {
        return `Tipo: ${this.obterTipo()}, RAM: ${this.obterRAM()} GB, HDD: ${this.obterHDD()} GB, CPU: ${this.obterCPU()} GHz`;
    }
}

// Fábrica de computadores
class FabricaComputadores {
    criarComputador(tipoComputador: string, ram: number, hdd: number, cpu: number): Computador {
        if (tipoComputador === "PC") {
            return new PC(ram, hdd, cpu);
        } else if (tipoComputador === "Servidor") {
            return new Servidor(ram, hdd, cpu);
        } else {
            throw new Error("Tipo de computador não suportado");
        }
    }
}

// Exemplo de uso
const fabrica = new FabricaComputadores();

const pc = fabrica.criarComputador("PC", 8, 500, 2.5);
const servidor = fabrica.criarComputador("Servidor", 32, 1000, 3.0);

console.log(pc.toString());        // Saída: Tipo: PC, RAM: 8 GB, HDD: 500 GB, CPU: 2.5 GHz
console.log(servidor.toString());  // Saída: Tipo: Servidor, RAM: 32 GB, HDD: 1000 GB, CPU: 3.0 GHz
