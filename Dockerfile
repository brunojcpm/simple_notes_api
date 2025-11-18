# -----------------------------
# Runtime Build
# -----------------------------
FROM node:22-alpine3.22 AS builder

# Diretório raiz do projeto
WORKDIR /app

# Instala globalmente o pnpm
RUN npm install -g pnpm

# Copia primeiro os arquivos de dependência do projeto
COPY package*.json pnpm-lock.yaml ./

# Essencial para rodar o PNPM:
# - o store fique dentro do container
# - não dependa do sistema host
# - não crie symlink quebrado
RUN pnpm config set store-dir .pnpm-store

# Instala as dependências do projeto
RUN pnpm install

# Copia todo o projeto
COPY . .

# Faz a compilação do TS para JS
RUN pnpm build

# -----------------------------
# Runtime Stage
# -----------------------------
FROM node:22-alpine3.22
        
WORKDIR /app
        
COPY package*.json pnpm-lock.yaml ./
        
RUN npm install -g pnpm
RUN pnpm config set store-dir .pnpm-store
RUN pnpm install --prod

# Copia a pasta 'dist' gerada no primeiro estágio para imagem final
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/src/server.js"]