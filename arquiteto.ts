import express from 'express';
import bodyParser from 'body-parser';

const app =  express();
const porta = 3000;
app.use(bodyParser.json());


// Array para listar usuarios:
const listaDeUsuarios = [
    { id: 1, nome: 'Mikey' },
    { id: 2, nome: 'Minnie' },
    { id: 3, nome: 'Pateta' },
  ];

// Listar Todos os Usuários:
app.get('/usuarios', (req, res) => {
    try {
        res.json(listaDeUsuarios);
      } catch (error) {
        console.error('Não encontrada a lista dos usuários:', error);
        res.status(404).json({ erro: 'Usuário não encontrado' });
      }
    });


    // Rota HTTP para detalhar o usuário por id
app.get('/usuarios/:id', (req, res) => {
    try {
        const usuarioId = Number(req.params.id);
        const usuario = listaDeUsuarios.find((u) => u.id === usuarioId);
    
        if (!usuario) {
          res.status(404).json({ erro: 'Usuário não encontrado' });
        } else {
          res.json(usuario);
        }
      } catch (error) {
        console.error('Erro ao obter detalhes do usuário:', error);
        res.status(404).json({ erro: 'Usuário não encontrado' });
      }
    });


    // Rota para adicionar usuário
app.post('/usuarios', (req, res) => {
    try {
        const novoUsuario = req.body;
        listaDeUsuarios.push(novoUsuario);
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        res.status(404).json({ erro: 'Usuário não encontrado' });
      }
    });
  

  // Rota HTTP para Saudação Personalizada
  app.get('/saudacao/:nome', (req, res) => {
    try {
        const nomeUsuario = req.params.nome;
        const saudacao = `Olá, ${nomeUsuario}!`;
        res.send(saudacao);
    } catch (error) {
        console.error('Erro ao criar saudação:', error);
        res.status(404).json({ erro: 'Usuário não encontrado' });
      }
    });
  
  app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
  });