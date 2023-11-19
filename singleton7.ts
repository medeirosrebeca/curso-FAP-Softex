class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senha-secreta";
  
    private constructor() {}
  
    public static obterInstancia(): SistemaSeguranca {
      if (!this.instancia) {
        this.instancia = new SistemaSeguranca();
      }
      return this.instancia;
    }
  
    public acessarBaseSecreta(senhaInserida: string): void {
      if (senhaInserida === this.senhaBaseSecreta) {
        console.log("Acesso concedido à Base Secreta!");
      } else {
        console.log("Acesso negado. Senha incorreta!");
      }
    }
  }
  
  // Programa principal
  const agenteSecreto = SistemaSeguranca.obterInstancia();
  
  // Tentativa de acesso à Base Secreta
  agenteSecreto.acessarBaseSecreta("senha-incorreta"); // Acesso negado. Senha incorreta!
  agenteSecreto.acessarBaseSecreta("senha-secreta");   // Acesso concedido à Base Secreta!
  