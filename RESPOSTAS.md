# Questões de aprendizagem

1. **Qual é a função do Node.js no desenvolvimento backend?**
   Permite executar JavaScript fora do navegador, no servidor. Com ele criamos programas que recebem requisições, aplicam regras do sistema, acessam dados e devolvem respostas.

2. **Qual é a diferença entre GET e POST?**
   GET é usado para consultar/obter dados e não envia corpo; POST é usado para enviar dados ao servidor (por exemplo, cadastrar um aluno) no corpo da requisição.

3. **Para que serve o Express?**
   É um framework para Node.js que facilita criar servidores, definir rotas, usar middlewares, interpretar dados e enviar respostas.

4. **Qual é a função do arquivo alunoController.js?**
   Concentrar a lógica de atendimento das requisições de alunos: listar, cadastrar, atualizar e excluir, além de validar dados e escolher a resposta e o status HTTP.

5. **O que significa req.body?**
   É o objeto com os dados enviados pelo cliente no corpo da requisição (geralmente JSON em POST e PUT). Exige `express.json()` configurado.

6. **Qual é a diferença entre req.params e req.body?**
   `req.params` traz parâmetros da URL (ex.: o `:id` em `/alunos/1`) e identifica o recurso; `req.body` traz os dados enviados no corpo (ex.: nome e email).

7. **Para que serve um middleware?**
   É uma função executada durante o processamento da requisição, antes da rota final. Serve para registrar acessos (log), validar dados, verificar autenticação, interpretar o corpo etc.

8. **Qual é a função do comando next()?**
   Passa o controle para o próximo middleware ou rota. Sem ele, a requisição fica parada e o cliente não recebe resposta.

9. **Por que utilizamos res.json()?**
   Converte um objeto JavaScript em JSON, define o cabeçalho Content-Type adequado e envia a resposta, formato fácil de consumir pelo frontend.

10. **Qual é a vantagem de separar o projeto em pastas?**
   Organização e manutenção mais fáceis: cada parte tem uma responsabilidade (rotas, controllers, middlewares), o código fica mais legível, reutilizável e simples de ampliar por várias pessoas.
