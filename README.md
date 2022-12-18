<h2 align="center">Desafio 03 🚀</h2>
<h5 align="center">Ignite - <a href="https://rocketseat.com.br/" >Rocketseat</a> - Trilha Node js</h5>

## 💻 Descrição

Temos uma aplicação Node.js que está em processo de desenvolvimento mas que já possui os testes necessários para fazer toda a validação dos requisitos (você não deve mexer nos testes).
Após algumas alterações no código da aplicação, parte dos testes deixaram de passar e agora só você pode resolver esse problema

## 🛠️ Funcionalidades

- Criar um repositório;
- Listar todos os repositórios;
- Alterar o `title`, `url` e `techs` de um repositório existente;
- Excluir um repositório;
- Dar likes em repositórios existentes;

## 🔗 Rotas

- GET `/repositories` → lista todos os repositórios cadastrados.
- POST `/repositories` → cria um repositório.
- PUT `/repositories/:id` → atualiza um repositório pelo id.
- DELETE `/repositories/:id` → deleta um repositório pelo id.
- POST `/repositories/:id/like` → adiciona like ao repositório pelo id.

### 📝 Clonagem e uso

Para clonar o repositório rode `https://github.com/oleoprado/desafio-03-trilha-nodejs-corrigindo-codigo-rocketseat.git` no seu terminal.
Entre na pasta do projeto e rode `yarn` no seu terminal para instalar as dependências.

#### Uso

Com as dependências instaladas rode `yarn dev` para subir o servidor. Para rodar os testes rode `yarn test`.
