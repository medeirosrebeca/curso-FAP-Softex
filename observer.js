// Classe Observer
class Observer {
  update() {}
}

// Classe Subject
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update());
  }
}

// Classe Editor (Subject)
class Editor extends Subject {
  constructor() {
    super();
    this.lines = [];
  }

  addLine(line) {
    this.lines.push(line);
    this.notify();
  }

  removeLine(lineNumber) {
    if (lineNumber >= 0 && lineNumber < this.lines.length) {
      this.lines.splice(lineNumber, 1);
      this.notify();
    }
  }

  getContent() {
    return this.lines.join('\n');
  }
}

// Subclasse TextEditor
class TextEditor extends Editor {
  insertLine(lineNumber, text) {
    if (lineNumber >= 0 && lineNumber <= this.lines.length) {
      this.lines.splice(lineNumber, 0, text);
      this.notify();
    }
  }
}

// Observador para imprimir conteúdo
class ConsoleObserver extends Observer {
  constructor(editor) {
    super();
    this.editor = editor;
    this.editor.addObserver(this);
  }

  update() {
    console.log('Conteúdo atualizado:\n', this.editor.getContent());
  }
}

// Exemplo de uso
const readline = require('readline-sync');

const textEditor = new TextEditor();
const consoleObserver = new ConsoleObserver(textEditor);

console.log('Insira linhas de texto. Digite "EOF" para salvar e sair.');

let lineNumber = 0;
while (true) {
  const line = readline.question(`Insira linha ${lineNumber + 1}: `);
  
  if (line === 'EOF') {
    textEditor.notify(); // Disparar evento "save"
    break;
  }

  textEditor.insertLine(lineNumber, line);
  lineNumber++;
}

console.log('\nConteúdo salvo:\n', textEditor.getContent());
