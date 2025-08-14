# 🌐 API REST com MongoDB Atlas, Node.js, Express e JWT

Este projeto é uma aplicação web com **API RESTful** desenvolvida em **Node.js** utilizando **Express**, conectada ao **MongoDB Atlas** para persistência de dados, e com autenticação segura via **JSON Web Token (JWT)**.  
Conta também com páginas HTML para interação do usuário e uma área administrativa protegida por login.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** → Ambiente de execução JavaScript no servidor.
- **Express.js** → Framework minimalista para criação de rotas e APIs REST.
- **MongoDB Atlas** → Banco de dados NoSQL na nuvem.
- **Mongoose** → ODM para modelagem e manipulação de dados no MongoDB.
- **JWT (JSON Web Token)** → Autenticação segura baseada em tokens.
- **Swagger** → Documentação interativa e testes da API.
- **HTML, CSS e JavaScript** → Interface de usuário.
- **CORS** → Controle de acesso da API.
- **Dotenv** → Gerenciamento de variáveis de ambiente.

---

## 📂 Estrutura de Pastas

```bash
📁 projeto
 ├── 📂 config
 │    ├── db.js            # Conexão com o MongoDB Atlas
 │    ├── swagger.js       # Configuração do Swagger
 ├── 📂 routes
 │    ├── authRoutes.js    # Rotas de autenticação (login, registro, etc.)
 ├── 📂 public
 │    ├── index.html       # Página inicial
 │    ├── admin.html       # Painel administrativo (após login)
 │    ├── 404.html         # Página de erro personalizada
 │    ├── css/             # Arquivos de estilo
 │    ├── js/              # Scripts de frontend
 ├── server.js             # Arquivo principal do servidor
 ├── .env                  # Variáveis de ambiente
 ├── package.json          # Dependências do projeto
 └── README.md             # Documentação
```

## ⚙️ Instalação e Execução

1. Clone o repositório
```bash
git clone https://github.com/seuusuario/seu-repositorio.git
```

```bash
cd seu-repositorio
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente. Crie um arquivo .env na raiz do projeto com:
```bash
PORT=3000
MONGO_URI=sua_string_de_conexao_do_mongodb_atlas
JWT_SECRET=sua_chave_secreta
```

4. Inicie o servidor
```
npm start
```

5. O servidor estará rodando em:
```bash
http://localhost:3000
```

## 📌 Rotas da API
|Método |	Endpoint           |	Descrição	Autenticação                  |
|-------|--------------------|------------------------------------------|
|GET	  | /     	           | Renderiza a página principal do sistema  |
|GET	  | /admin 	           | Página acessada pós login                |
|POST   |	/api/auth/register | Registra um novo usuário	                |
|POST	  | /api/auth/login	   | Realiza login e retorna um token JWT	    |
|GET	  | /api/protected	   | Exemplo de rota protegida	✅ Token JWT  |


Após o login, o servidor retorna um token JWT, armazenado no localStorage.


## 📖 Documentação com Swagger

O projeto conta com documentação interativa da API via Swagger.
Após iniciar o servidor, acesse:
```bash
http://localhost:3000/api-docs
```

## 📜 Licença

Este projeto é de uso livre para fins de estudo e aprendizado.
