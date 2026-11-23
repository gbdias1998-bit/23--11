const express = require('express');
const app = express();

const logMiddleware = require('./middlewares/logMiddleware');
const alunoRoutes = require('./routes/alunoRoutes');

// Permite interpretar corpos JSON
app.use(express.json());

// Middleware de log (antes das rotas)
app.use(logMiddleware);

// Rota inicial
app.get('/', (req, res) => {
  res.send('Sistema de Cadastro de Alunos - Instituição de Ensino');
});

// Rotas de alunos
app.use('/alunos', alunoRoutes);

app.listen(3000, () => {
  console.log('Servidor funcionando na porta 3000');
});
