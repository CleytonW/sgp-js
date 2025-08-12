# SGP-JS (Front-end)

Interface web do **Sistema de Gerenciamento de Projetos (SGP)**, desenvolvida em **React** e integrada a um back-end em **Java/Spring Boot**.  
O objetivo é entregar uma aplicação moderna, responsiva e escalável, com boas práticas de desenvolvimento e tecnologias amplamente utilizadas no mercado.

> O back-end deste projeto está disponível em: [SGP-API (Java/Spring Boot)](https://github.com/CleytonW/sgp-api)

---

## Visão Geral

Este projeto implementa o front-end de um sistema para gerenciamento de projetos, permitindo visualizar, cadastrar, editar e excluir informações de forma prática.  
Foi desenvolvido como parte de um estudo de caso completo para consolidar habilidades em **React**, **Bootstrap**, consumo de APIs REST e manipulação de dados no navegador.

---

## Principais Recursos

- Estrutura **SPA (Single Page Application)** com **React Router DOM** para navegação fluida.
- Consumo de APIs REST com **Axios**, integrando ao back-end em Java/Spring Boot.
- Layout responsivo com **Bootstrap 5**, garantindo boa experiência em desktop e dispositivos móveis.
- Manipulação e formatação de datas com **date-fns**.
- Código estruturado em componentes reutilizáveis.
- Compatibilidade com navegadores modernos via **Browserslist**.

---

## Tecnologias Utilizadas

**Front-end**
- React 19
- React Router DOM 7
- Bootstrap 5
- Axios
- date-fns

**Ferramentas e Configuração**
- Create React App (React Scripts)
- ESLint
- Browserslist

---

## Estrutura do Projeto

src/
├── components/ # Componentes reutilizáveis
├── pages/ # Páginas principais
├── services/ # Configuração de integração com API
├── styles/ # Estilos customizados
├── App.js # Componente raiz
└── index.js # Ponto de entrada


## Como Executar Localmente

### Pré-requisitos
- Node.js 18+  
- NPM ou Yarn instalados

### Passos
```bash
# Clone o repositório
git clone https://github.com/CleytonW/sgp-js.git
cd sgp-js

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm start
Acesse em: http://localhost:3000

Build para Produção
bash
Copiar
Editar
npm run build
O código final será gerado na pasta build/.

Próximos Passos e Possibilidades de Evolução
Adicionar autenticação e autorização com JWT.

Criar testes automatizados com Jest e React Testing Library.

Implementar controle de estado global (Redux ou Context API).

Melhorar acessibilidade (A11Y) e SEO.

Deploy da aplicação em serviços como Vercel, Netlify ou GitHub Pages.

Sobre o Back-end
Este front-end consome a API desenvolvida no projeto SGP-API, construída em Java 17 + Spring Boot, com:

Banco de dados relacional (MySQL/PostgreSQL).

Estrutura RESTful.

Validação de dados e tratamento de erros.

Integração com o front-end via JSON.