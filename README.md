# Simple Notes API

Uma API REST moderna para gerenciamento de notas desenvolvida com Hono, TypeScript, PostgreSQL e Knex.js seguindo arquitetura limpa.

## 📋 Funcionalidades

- ✅ Criar notas
- ✅ Listar todas as notas
- ✅ Buscar nota por ID
- ✅ Atualizar nota
- ✅ Deletar nota

> **Status**: API CRUD completa implementada com arquitetura limpa, casos de uso e validações robustas.

## 🛠 Stack Tecnológica

### Core
- **[Hono](https://hono.dev/)** - Framework web ultrarrápido e leve para Edge Runtime
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática

### Banco de Dados
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Knex.js](https://knexjs.org/)** - Query builder SQL para Node.js
- **Migrations & Seeds** - Controle de versão do banco de dados

### Validação e Qualidade
- **[Zod](https://zod.dev/)** - Validação e parsing de schemas TypeScript-first
- **[Biome](https://biomejs.dev/)** - Linter e formatter ultrarrápido
- **[CORS](https://github.com/expressjs/cors)** - Middleware para Cross-Origin Resource Sharing

### Ferramentas de Desenvolvimento
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes eficiente
- **[ts-node](https://typestrong.org/ts-node/)** - Execução direta de TypeScript
- **[nodemon](https://nodemon.io/)** - Hot reload para desenvolvimento
- **[tsconfig-paths](https://github.com/dividab/tsconfig-paths)** - Suporte a path mapping

## 📁 Arquitetura do Projeto

```
simple_notes_api/
├── src/
│   ├── controllers/           # Controladores (handlers de requisições HTTP)
│   │   └── notes.controller.ts
│   ├── domains/               # Domínios e regras de negócio
│   │   └── note/
│   │       ├── entities/      # Entidades do domínio
│   │       │   └── note.entity.ts
│   │       └── use-cases/     # Casos de uso (regras de negócio)
│   │           ├── create-note.use-case.ts
│   │           ├── delete-note.use-case.ts
│   │           ├── get-note-by-id.use-case.ts
│   │           ├── get-notes.use-case.ts
│   │           └── update-note.use-case.ts
│   ├── main/                  # Configurações principais e infraestrutura
│   │   ├── config/
│   │   │   └── app.ts         # Configuração do app Hono
│   │   └── routes/
│   │       └── notes.router.ts # Rotas da API
│   └── server.ts              # Ponto de entrada da aplicação
├── database/
│   ├── migrations/            # Migrações do banco de dados
│   │   └── 20251114190405_create_notes_table.ts
│   └── seeders/               # Seeds para popular o banco
│       └── 20251114192205_create_notes_example.ts
├── biome.json                 # Configuração do Biome (linter/formatter)
├── knexfile.ts               # Configuração do Knex.js
├── tsconfig.json             # Configuração do TypeScript
├── package.json
└── README.md
```

### Padrões de Arquitetura

- **Clean Architecture** - Separação clara entre camadas (Controllers, Use Cases, Entities)
- **Domain-Driven Design (DDD)** - Organização por domínios de negócio
- **Use Cases Pattern** - Encapsulamento de regras de negócio em casos de uso específicos
- **Dependency Injection** - Inversão de dependências para melhor testabilidade
- **Entity Pattern** - Entidades ricas com validação através do Zod
- **UUID v7** - Identificadores únicos ordenáveis por tempo de criação
- **Controllers** - Manipulam requisições HTTP e delegam para casos de uso
- **Routers** - Organizam e agrupam rotas relacionadas por domínio

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/) (recomendado) ou npm/yarn
- [PostgreSQL](https://www.postgresql.org/) (versão 12 ou superior)

### Instalação e Configuração

#### 🚀 Setup Automatizado (Recomendado)

1. **Clone o repositório**
   ```bash
   git clone https://github.com/brunojcpm/simple_notes_api.git
   cd simple_notes_api
   ```

2. **Setup completo automatizado**
   ```bash
   pnpm run setup
   ```
   
   Este comando executa automaticamente:
   - ✅ Instalação de dependências (`pnpm install --frozen-lockfile`)
   - ✅ Inicialização do PostgreSQL via Docker (`docker compose up -d`)
   - ✅ Execução de migrações (`pnpm run migrate:latest`)
   - ✅ População com dados de exemplo (`pnpm run seed`)

3. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm run dev
   ```

#### 🔧 Setup Manual

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
   
   Copie o arquivo de exemplo e configure suas variáveis:
   ```bash
   cp .env.exemple .env
   ```
   
   Edite o arquivo `.env`:
   ```env
   DATABASE_URL="postgresql://postgres:123456@localhost:5432/backend_learning"
   PORT=3000
   JWT_SECRET="supersecreto123"
   ```

4. **Configure o banco de dados**
   
   **Opção A: PostgreSQL com Docker (Recomendado)**
   ```bash
   pnpm run setup:services
   ```
   
   **Opção B: PostgreSQL Local**
   ```sql
   CREATE DATABASE backend_learning;
   ```

5. **Execute as migrações**
   ```bash
   pnpm run migrate:latest
   ```

6. **Popule o banco com dados de exemplo (opcional)**
   ```bash
   pnpm run seed
   ```

7. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm run dev
   ```

A API estará disponível em `http://localhost:3000`

## 📚 Endpoints da API

### Base URL
```
http://localhost:3000
```

### Health Check
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/health-check` | Verificação de saúde da API |

### Notas

| Método | Endpoint | Descrição | Status |
|--------|----------|-----------|---------|
| `POST` | `/notes` | Criar uma nova nota | ✅ Implementado |
| `GET` | `/notes` | Listar todas as notas | ✅ Implementado |
| `GET` | `/notes/:id` | Buscar nota por ID | ✅ Implementado |
| `PUT` | `/notes/:id` | Atualizar nota | ✅ Implementado |
| `DELETE` | `/notes/:id` | Deletar nota | ✅ Implementado |

### Exemplos de uso

#### Health Check
```bash
curl http://localhost:3000/health-check
```

**Resposta:**
```
OK!
```

#### Criar nota
```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Minha primeira nota",
    "content": "Conteúdo da nota aqui"
  }'
```

**Resposta:**
```json
{
  "message": "note created",
  "note": {
    "id": "01JCX8K9M2NQZP8X7V5W3Y1B4C",
    "title": "Minha primeira nota",
    "content": "Conteúdo da nota aqui"
  }
}
```

#### Listar todas as notas
```bash
curl http://localhost:3000/notes
```

**Resposta:**
```json
[
  {
    "id": "01JCX8K9M2NQZP8X7V5W3Y1B4C",
    "title": "Minha primeira nota",
    "content": "Conteúdo da nota aqui",
    "created_at": "2024-11-14T19:30:00.000Z",
    "updated_at": "2024-11-14T19:30:00.000Z"
  }
]
```

#### Buscar nota por ID
```bash
curl http://localhost:3000/notes/01JCX8K9M2NQZP8X7V5W3Y1B4C
```

**Resposta:**
```json
{
  "id": "01JCX8K9M2NQZP8X7V5W3Y1B4C",
  "title": "Minha primeira nota",
  "content": "Conteúdo da nota aqui",
  "created_at": "2024-11-14T19:30:00.000Z",
  "updated_at": "2024-11-14T19:30:00.000Z"
}
```

#### Atualizar nota
```bash
curl -X PUT http://localhost:3000/notes/01JCX8K9M2NQZP8X7V5W3Y1B4C \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Título atualizado",
    "content": "Conteúdo atualizado da nota"
  }'
```

**Resposta:**
```json
{
  "id": "01JCX8K9M2NQZP8X7V5W3Y1B4C",
  "title": "Título atualizado",
  "content": "Conteúdo atualizado da nota"
}
```

#### Deletar nota
```bash
curl -X DELETE http://localhost:3000/notes/01JCX8K9M2NQZP8X7V5W3Y1B4C
```

**Resposta:**
```json
{
  "message": "note deleted"
}
```

## 🗄 Modelo de dados

### Note Entity
```typescript
interface Note {
  id: string;          // UUID v7 único e ordenável por tempo
  title: string;       // Título da nota (obrigatório)
  content: string;     // Conteúdo da nota (obrigatório)
  created_at: Date;    // Data de criação (automática)
  updated_at: Date;    // Data de atualização (automática)
}
```

### Schemas de Validação

#### Criação de Nota
```typescript
const createNoteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  content: z.string().min(1, 'Content is required'),
});
```

#### Atualização de Nota
```typescript
const updateNoteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  content: z.string().min(1, 'Content is required'),
});
```

#### Validação de UUID
```typescript
const uuidV7Schema = z.string().uuid('Invalid UUID format');
```

## 📝 Scripts disponíveis

### Setup e Desenvolvimento
- `pnpm run setup` - **Setup completo automatizado** (instala deps, inicia Docker, executa migrações e seeds)
- `pnpm run setup:services` - Inicia apenas o PostgreSQL via Docker Compose
- `pnpm run dev` - Inicia o servidor em modo de desenvolvimento com hot reload
- `pnpm run build` - Compila o projeto TypeScript para JavaScript

### Banco de dados
- `pnpm run migrate:latest` - Executa todas as migrações pendentes
- `pnpm run migrate:up` - Executa a próxima migração
- `pnpm run migrate:down` - Reverte a última migração
- `pnpm run migrate:rollback` - Reverte o último lote de migrações
- `pnpm run migrate:drop` - Reverte todas as migrações
- `pnpm run migration:status` - Mostra o status das migrações
- `pnpm run migration:create <name>` - Cria uma nova migração

### Seeds
- `pnpm run seed` - Executa todos os seeds
- `pnpm run seed:create <name>` - Cria um novo seed

### Código
- `pnpm run lint` - Executa o linter e formata o código
- `pnpm run lint:verify` - Verifica issues de lint sem corrigir
- `pnpm run lint:force` - Força correção mesmo com issues unsafe

## 🔧 Configuração do banco de dados

### PostgreSQL Local

1. **Instale o PostgreSQL**
2. **Crie um banco de dados:**
   ```sql
   CREATE DATABASE simple_notes_db;
   ```
3. **Configure a URL no `.env`:**
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/simple_notes_db"
   ```

### PostgreSQL com Docker (Recomendado)

#### Usando Docker Compose (Automático)
```bash
pnpm run setup:services
```

#### Usando Docker manualmente
```bash
docker run --name postgres-notes \
  -e POSTGRES_DB=backend_learning \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=123456 \
  -p 5432:5432 \
  -d postgres:17.1-alpine
```

#### Docker Compose completo
```bash
# Inicializar todos os serviços (API + PostgreSQL)
docker compose up -d

# Para parar os serviços
docker compose down

# Para rebuildar após mudanças
docker compose up --build
```

## 🏗️ Padrões de código

### Path Mapping
O projeto usa path mapping para imports limpos:

```typescript
// ✅ Ao invés de
import { NotesController } from '../../../controllers/notes.controller';

// ✅ Use
import { NotesController } from '@/controllers/notes.controller';
```

### Aliases disponíveis:
- `@/*` - `./src/*`
- `@domain/*` - `./src/domains/*`
- `@controller/*` - `./src/controllers/*`
- `@main/*` - `./src/main/*`

### Estrutura de Response
```typescript
// Sucesso
{
  "message": "Operação realizada com sucesso",
  "data": { /* resultado */ }
}

// Erro
{
  "message": "Descrição do erro",
  "error_code": "ERROR_CODE",
  "details": { /* detalhes opcionais */ }
}
```

## 🧪 Testes

> **Status**: Testes não implementados ainda.

Planejado para implementar:
- [ ] Testes unitários com Jest/Vitest
- [ ] Testes de integração
- [ ] Testes de endpoint

## 🐳 Docker

### Executando com Docker

1. **Build da imagem Docker**
   ```bash
   docker build -t simple-notes-api .
   ```

2. **Executar container individual**
   ```bash
   docker run -p 3000:3000 \
     -e DATABASE_URL="postgresql://postgres:123456@localhost:5432/backend_learning" \
     -e PORT=3000 \
     simple-notes-api
   ```

3. **Executar com Docker Compose** (Recomendado)
   ```bash
   # Primeira execução
   docker compose up --build
   
   # Execuções subsequentes
   docker compose up -d
   ```

### Estrutura do Docker

- **Multi-stage build** para otimização de tamanho
- **Node.js 22 Alpine** (imagem leve)
- **pnpm** como gerenciador de pacotes
- **Build stage** separado do runtime
- **Configurações otimizadas** para produção

## 🚀 Deployment

### Preparação para Produção

1. **Build do projeto:**
   ```bash
   pnpm run build
   ```

2. **Variáveis de ambiente de produção:**
   ```env
   DATABASE_URL="sua-url-postgresql-producao"
   PORT=3000
   NODE_ENV=production
   JWT_SECRET="secret-super-seguro-producao"
   ```

3. **Execute migrações em produção:**
   ```bash
   pnpm run migrate:latest
   ```

### Plataformas Recomendadas
- **Railway** - Deploy simples com PostgreSQL
- **Heroku** - Clássico para Node.js
- **Vercel** - Ideal para Edge Runtime (Hono)
- **DigitalOcean App Platform** - Boa relação custo-benefício

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Commit
```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formatação de código
refactor: refatoração de código
test: adiciona ou corrige testes
```

## 📄 Licença

Este projeto está sob a licença ISC.

## 🔮 Roadmap

### Funcionalidades Implementadas
- [x] 📝 **CRUD completo de notas** - ✅ Implementado
- [x] 🐳 **Dockerização** - ✅ Docker + Docker Compose
- [x] ⚙️ **Setup automatizado** - ✅ Script `pnpm run setup`
- [x] 🏗️ **Build pipeline** - ✅ TypeScript compilation
- [x] 🔧 **Configuração robusta** - ✅ Path mapping, Biome, etc.

### Funcionalidades Planejadas
- [ ] 🔍 Sistema de busca e filtros
- [ ] 🏷️ Tags para categorização
- [ ] 👤 Sistema de autenticação JWT
- [ ] 📄 Paginação nas listagens
- [ ] 🔄 Soft delete para notas
- [ ] 📊 Logs estruturados
- [ ] 🧪 Suite de testes completa
- [ ] 📖 Documentação OpenAPI/Swagger

### Melhorias Técnicas
- [ ] 🔄 Middleware de rate limiting
- [ ] 🛡️ Validação de entrada mais robusta
- [ ] 📈 Métricas e monitoring
- [ ] ⚡ Cache com Redis
- [ ] 🔐 Criptografia de dados sensíveis

## 👨‍💻 Autor

**Bruno J. C. P. M.**
- GitHub: [@brunojcpm](https://github.com/brunojcpm)

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a seção de [Issues](https://github.com/brunojcpm/simple_notes_api/issues)
2. Abra uma nova issue se necessário
3. Para contribuições, consulte o guia de contribuição acima

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!