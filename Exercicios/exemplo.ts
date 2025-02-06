class Carro {
    constructor (private modelo: string, private cor: string){}

public getModelo() : string {
    return this.modelo;
}

public setModelo(modelo : string): void {
    this.modelo = modelo;
}

public getCor() : string {
    return this.cor;
}

public setCor(cor : string): void {
    this.cor = cor;
}
}

class CarroEsportivo extends Carro implements usandoCarro {
    constructor (modelo: string, cor: string, private ano: number){
        super(modelo, cor)
    }
    public acelerarRapido(): void {
    }
    
    public reproduzirSom(): void {
    }
    public frear(): void {
        console.log("Freiei no carro esportivo.");
        
    }
}

interface usandoCarro {
    frear(): void

}

const carroExemplo = new CarroEsportivo("Civic", "Branco", 2000);
console.log(carroExemplo);


//-----------------------------------------------------------------------------------

