// Classe Observador
class Observador {
    atualizar() {}
  }
  
  // Classe Sujeito
  class Sujeito {
    constructor() {
      this.observadores = [];
    }
  
    adicionarObservador(observador) {
      this.observadores.push(observador);
    }
  
    removerObservador(observador) {
      this.observadores = this.observadores.filter(obs => obs !== observador);
    }
  
    notificar() {
      this.observadores.forEach(observador => observador.atualizar());
    }
  }
  
  // Classe Editor (Sujeito)
  class Editor extends Sujeito {
    constructor() {
      super();
      this.linhas = [];
    }
  
    adicionarLinha(linha) {
      this.linhas.push(linha);
      this.notificar();
    }
  
    removerLinha(numeroLinha) {
      if (numeroLinha >= 0 && numeroLinha < this.linhas.length) {
        this.linhas.splice(numeroLinha, 1);
        this.notificar();
      }
    }
  
    obterConteudo() {
      return this.linhas.join('\n');
    }
  }
  
  // Subclasse EditorDeTexto
  class EditorDeTexto extends Editor {
    inserirLinha(numeroLinha, texto) {
      if (numeroLinha >= 0 && numeroLinha <= this.linhas.length) {
        this.linhas.splice(numeroLinha, 0, texto);
        this.notificar();
      }
    }
  }
  
  // Observador para imprimir conteúdo
  class ObservadorConsole extends Observador {
    constructor(editor) {
      super();
      this.editor = editor;
      this.editor.adicionarObservador(this);
    }
  
    atualizar() {
      console.log('Conteúdo atualizado:\n', this.editor.obterConteudo());
    }
  }
  
  // Exemplo de uso
  const readline = require('readline-sync');
  
  const editorDeTexto = new EditorDeTexto();
  const observadorConsole = new ObservadorConsole(editorDeTexto);
  
  console.log('Insira linhas de texto. Digite "SAIR" para salvar e sair.');
  
  let numeroLinha = 0;
  while (true) {
    const linha = readline.question(`Insira linha ${numeroLinha + 1}: `);
    
    if (linha === 'SAIR') {
      editorDeTexto.notificar(); // Disparar evento "save"
      break;
    }
  
    editorDeTexto.inserirLinha(numeroLinha, linha);
    numeroLinha++;
  }
  
  console.log('\nConteúdo salvo:\n', editorDeTexto.obterConteudo());
  