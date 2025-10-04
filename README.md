# Simple Notes API

Uma API REST simples para gerenciamento de notas desenvolvida com Node.js, TypeScript, Express e Prisma.

## 📋 Funcionalidades

- ✅ Criar notas
- ✅ Listar todas as notas
- ✅ Buscar nota por ID
- ✅ Atualizar nota
- ✅ Deletar nota

## 🛠 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Express** - Framework web para Node.js
- **Prisma** - ORM moderno para TypeScript e Node.js
- **PostgreSQL** - Banco de dados relacional
- **CORS** - Middleware para Cross-Origin Resource Sharing

## 📁 Estrutura do Projeto

```
simple_notes_api/
├── prisma/
│   ├── migrations/         # Migrações do banco de dados
│   └── schema.prisma      # Schema do banco de dados
├── src/
│   ├── models/
│   │   └── note.ts        # Interface/modelo da nota
│   ├── routes/
│   │   └── notes.ts       # Rotas da API
│   ├── index.ts           # Arquivo principal da aplicação
│   └── prisma.ts          # Configuração do cliente Prisma
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes)
- [PostgreSQL](https://www.postgresql.org/) (banco de dados)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/brunojcpm/simple_notes_api.git
   cd simple_notes_api
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/simple_notes_db"
   ```
   
   > **Nota:** Substitua `username`, `password` e `simple_notes_db` pelos valores corretos do seu banco PostgreSQL.

4. **Execute as migrações do banco de dados**
   ```bash
   pnpm run migrations
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm run dev
   ```

A API estará disponível em `http://localhost:3000`

## 📚 Endpoints da API

### Base URL
```
http://localhost:3000
```

### Notas

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| `POST` | `/notes` | Criar uma nova nota | `{ "title": "string", "content": "string" }` |
| `GET` | `/notes` | Listar todas as notas | - |
| `GET` | `/notes/:id` | Buscar nota por ID | - |
| `PUT` | `/notes/:id` | Atualizar nota | `{ "title": "string", "content": "string" }` |
| `DELETE` | `/notes/:id` | Deletar nota | - |

### Exemplos de uso

#### Criar nota
```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "Minha primeira nota", "content": "Conteúdo da nota"}'
```

#### Listar todas as notas
```bash
curl http://localhost:3000/notes
```

#### Buscar nota por ID
```bash
curl http://localhost:3000/notes/1
```

#### Atualizar nota
```bash
curl -X PUT http://localhost:3000/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Título atualizado", "content": "Conteúdo atualizado"}'
```

#### Deletar nota
```bash
curl -X DELETE http://localhost:3000/notes/1
```

## 🗄 Modelo de dados

### Note
```typescript
{
  id: number;           // ID único da nota (autoincrement)
  title: string;        // Título da nota
  content: string;      // Conteúdo da nota
  createdAt: DateTime;  // Data de criação (automática)
}
```

## 📝 Scripts disponíveis

- `pnpm run dev` - Inicia o servidor em modo de desenvolvimento com hot reload
- `pnpm run migrations` - Executa as migrações do banco de dados
- `pnpm test` - Executa os testes (não implementado)

## 🔧 Configuração do banco de dados

### PostgreSQL

1. **Instale o PostgreSQL** em sua máquina
2. **Crie um banco de dados:**
   ```sql
   CREATE DATABASE simple_notes_db;
   ```
3. **Configure a URL de conexão** no arquivo `.env`
4. **Execute as migrações:**
   ```bash
   pnpm run migrations
   ```

### Alternativa com Docker

Se preferir usar Docker para o PostgreSQL:

```bash
docker run --name postgres-notes \
  -e POSTGRES_DB=simple_notes_db \
  -e POSTGRES_USER=username \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -d postgres:15
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 🐛 Problemas conhecidos

- Não há validação avançada de dados de entrada
- Não há autenticação/autorização implementada
- Não há testes unitários implementados

## 🔮 Próximos passos

- [ ] Implementar autenticação JWT
- [ ] Adicionar validação de dados com Zod
- [ ] Implementar testes unitários e de integração
- [ ] Adicionar paginação nas listagens
- [ ] Implementar logs estruturados
- [ ] Dockerizar a aplicação
