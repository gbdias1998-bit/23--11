let alunos = [
  { id: 1, nome: 'Carlos', email: 'carlos@gmail.com' },
  { id: 2, nome: 'Mariana', email: 'mariana@gmail.com' }
];

// Listar alunos
const listarAlunos = (req, res) => {
  res.json(alunos);
};

// Cadastrar aluno (POST)
const cadastrarAluno = (req, res) => {
  const { nome, email } = req.body || {};

  if (!nome || !email) {
    return res.status(400).json({
      erro: 'Nome e email são obrigatórios!'
    });
  }

  // maior id + 1: evita ids repetidos depois de exclusões
  const novoId = alunos.length > 0 ? Math.max(...alunos.map(a => a.id)) + 1 : 1;

  const novoAluno = {
    id: novoId,
    nome,
    email
  };

  alunos.push(novoAluno);

  res.status(201).json({
    mensagem: 'Aluno cadastrado com sucesso!',
    aluno: novoAluno
  });
};

// Atualizar aluno (PUT)
const atualizarAluno = (req, res) => {
  const id = Number(req.params.id);
  const { nome, email } = req.body || {};

  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({
      erro: 'Aluno não encontrado!'
    });
  }

  if (!nome || !email) {
    return res.status(400).json({
      erro: 'Nome e email são obrigatórios!'
    });
  }

  aluno.nome = nome;
  aluno.email = email;

  res.json({
    mensagem: 'Aluno atualizado!',
    aluno
  });
};

// Excluir aluno (DELETE)
const excluirAluno = (req, res) => {
  const id = Number(req.params.id);
  const existe = alunos.find(a => a.id === id);

  if (!existe) {
    return res.status(404).json({
      erro: 'Aluno não encontrado!'
    });
  }

  alunos = alunos.filter(a => a.id !== id);

  res.json({
    mensagem: 'Aluno excluído com sucesso!'
  });
};

module.exports = {
  listarAlunos,
  cadastrarAluno,
  atualizarAluno,
  excluirAluno
};
