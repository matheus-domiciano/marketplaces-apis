```
src/
├── controllers/    # Recebe requisições, valida input, retorna respostas
├── services/       # Lógica de negócio
├── repositories/   # Acesso a dados (banco, APIs externas)
├── models/         # Definição de entidades/schemas
├── middlewares/    # Autenticação, logging, error handling
├── routes/         # Definição das rotas
├── utils/          # Funções auxiliares
├── config/         # Configurações (DB, env variables)
└── app.js          # Setup do Express
```
Fluxo: Route → Controller → Service → Repository → Database