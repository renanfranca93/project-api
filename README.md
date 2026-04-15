## Project API (Vercel) + MongoDB Atlas

Esta API roda na Vercel (Serverless Functions) e persiste dados no MongoDB Atlas.

### Rotas

- **GET `/api/products`**: lista produtos (collection `products`)
- **POST `/api/products`**: insere 1 produto (body JSON) e retorna a lista atualizada

### Criando o MongoDB Atlas

- **Criar conta/cluster**: crie um projeto e um cluster (M0 free tier já serve).
- **Criar usuário**: em *Database Access* crie um usuário/senha.
- **Liberar IP**:
  - Para desenvolvimento rápido: em *Network Access* permita `0.0.0.0/0` (não recomendado para produção).
  - Em produção, prefira permitir apenas os IPs necessários (ou use uma configuração mais restrita).
- **Criar database/collection**:
  - Database: `project_api` (ou o nome que você quiser)
  - Collection: `products`

### Variáveis de ambiente

Crie um arquivo `.env` na raiz (já existe neste projeto) com:

- **`MONGODB_URI`**: sua connection string do Atlas
- **`MONGODB_DB`** (opcional): nome do database (padrão: `project_api`)
- **`MONGODB_PRODUCTS_COLLECTION`** (opcional): nome da collection (padrão: `products`)

Exemplo:

```env
MONGODB_URI="mongodb+srv://USER:SENHA@CLUSTER.mongodb.net/?retryWrites=true&w=majority"
MONGODB_DB="project_api"
MONGODB_PRODUCTS_COLLECTION="products"
```

### Rodando localmente

Pré-requisitos:
- Node.js 24+
- Vercel CLI (ou usar via `npx`)

Instale dependências e rode:

```bash
npm install
vercel dev
```

Se você não tiver a Vercel CLI instalada globalmente, rode:

```bash
npm run dev
```

### Configurando na Vercel (produção)

No dashboard do projeto:

- Vá em **Settings → Environment Variables**
- Adicione `MONGODB_URI` (e opcionalmente `MONGODB_DB`, `MONGODB_PRODUCTS_COLLECTION`)
- Faça um redeploy

### Testando a API

GET:

```bash
curl http://localhost:3000/api/products
```

POST:

```bash
curl -X POST http://localhost:3000/api/products ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Headset\",\"value\":199.9}"
```

Formato válido

{
  "nome":"Título do filme",
  "imagemUrl":"https://pathwise.com.br/d20.png",
  "resumo":"Isso é um resumo",
  "anoLancamento":2020
}