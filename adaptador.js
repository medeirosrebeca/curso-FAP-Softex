// Interface para Pato
class Pato {
    grasnar() {}
    voar() {}
  }
  
  // Implementação concreta de Pato
  class PatoDeBorracha extends Pato {
    grasnar() {
      console.log("Squeak! Squeak! Sou um pato de borracha!");
    }
  
    voar() {
      console.log("Patos de borracha não voam.");
    }
  }
  
  // Interface para Galinha
  class Galinha {
    cacarejar() {}
    voarCurto() {}
  }
  
  // Implementação concreta de Galinha
  class GalinhaComum extends Galinha {
    cacarejar() {
      console.log("Cocoricó!");
    }
  
    voarCurto() {
      console.log("Voando a curta distância como uma galinha comum.");
    }
  }
  
  // Adaptador para Pato se comportar como Galinha
  class AdaptadorPato extends Galinha {
    constructor(pato) {
      super();
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.grasnar();
    }
  
    voarCurto() {
      this.pato.voar();
    }
  }
  
  // Demonstração de uso
  class AdaptadorPatoDemo {
    static executar() {
      const patoDeBorracha = new PatoDeBorracha();
      const adaptadorPato = new AdaptadorPato(patoDeBorracha);
  
      console.log("Pato de Borracha:");
      patoDeBorracha.grasnar();
      patoDeBorracha.voar();
  
      console.log("\nAdaptador Pato usado como Galinha:");
      adaptadorPato.cacarejar(); // Chama o método do pato adaptado
      adaptadorPato.voarCurto(); // Chama o método do pato adaptado
    }
  }
  
  // Executar a demonstração
  AdaptadorPatoDemo.executar();
  
  