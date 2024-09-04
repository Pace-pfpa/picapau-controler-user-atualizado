# Pica-Pau Controle de Usuário

## Descrição
O **Pica-Pau Controle de Usuário** é o componente intermediário que gerencia a comunicação entre a API e o banco de dados. Ele utiliza o PostgreSQL como banco de dados e o **Prisma** como ORM para realizar operações CRUD de usuários, recuperação de senha, e manipulação de processos no banco de dados.
Comunica-se com o **SuperPicau-api** e o **Frontend**.

## Tecnologias Utilizadas
- **Node.js** com **TypeScript**
- **Prisma** (ORM)
- **PostgreSQL**
- **Docker** e **Docker Compose** (para containerização)

## Instalação
1. Clone o repositório:

   ```bash
   git clone https://github.com/Pace-pfpa/picapau-controler-user-atualizado.git
2. Instale as dependências:

    ```bash
   npm install
## Configuração

1. Copie o arquivo .env-example e renomeie para .env:

    ```bash
   cp .env.development.local .env
2. Preencha as variáveis de ambiente necessárias no arquivo .env.

## Rodando o Projeto
### Com npm:
* Inicie o servidor localmente: 
    ```bash
    npm run serve
### Com Docker Compose
* Suba o ambiente usando Docker Compose:
    ```bash
    docker-compose up -d --build
## Entidades e Operações
* O projeto utiliza o Prisma ORM para definir o schema e as entidades do banco de dados.
* As principais funcionalidades incluem:
  * CRUD de usuários
  * Recuperação de senha
  * Salvamento e exclusão de processos no banco de dados
## Contribuição
Atualmente, a contribuição é restrita a membros da equipe pica-pau na organização Nutec-PFPA no GitHub.
