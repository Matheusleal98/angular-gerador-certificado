# 🏆 Gerador de Certificados Angular

O **Gerador de Certificados Angular** é uma aplicação desenvolvida com o objetivo de **praticar conceitos fundamentais e avançados do framework Angular**, incluindo **componentização, navegação, manipulação de dados com LocalStorage** e **geração dinâmica de arquivos para download**.  

A aplicação permite **criar, visualizar e armazenar certificados personalizados**, simulando um sistema simples de gestão de certificados, ideal para portfólios e aprendizado prático.

---

## 🚀 Tecnologias

### 🧩 Stack Principal

- **Framework:** Angular 20  
- **Linguagem:** TypeScript  
- **Estilização:** Bootstrap 5  
- **Geração de ID:** [uuid](https://www.npmjs.com/package/uuid)  
- **Geração e Download de Certificados:** [Canvas2](https://www.npmjs.com/package/canvas2)  
- **Armazenamento Local:** LocalStorage (persistência de certificados gerados)

---

## 💡 Funcionalidades Implementadas

### 📜 Certificados
- ✍️ **Gerar novo certificado** informando **nome** e **atividade**  
- 🧾 **Listar certificados gerados** (histórico salvo no navegador via LocalStorage)  
- 👀 **Visualizar certificado** completo, com nome e descrição  
- ⬇️ **Baixar certificado em imagem** usando **Canvas2**  

### 🧭 Navegação
- 🔄 Navegação entre telas implementada com **Angular Router**  
- 💾 Salvamento automático de certificados no navegador  
- 🧹 Possibilidade de limpar ou atualizar o histórico  

---

## 🧱 Estrutura de Telas

| Tela | Descrição |
|------|------------|
| **Página inicial** | Exibe o histórico de certificados gerados |
| **/certificados/novo** | Permite criar um novo certificado informando nome e atividade |
| **/certificados/:id** | Mostra o certificado completo e permite fazer download |

---

## 🛠️ Ambiente de Desenvolvimento

### 🔧 Pré-requisitos

- Node.js 18+  
- Angular CLI 20+  

---

## ⚙️ Configuração Inicial

### Clonar o repositório

```bash
git clone https://github.com/Matheusleal98/angular-gerador-certificado.git
cd angular-gerador-certificado
```
### Instalar dependências

```bash
npm install
```

### ▶️ Executar o Projeto

```bash
ng serve
```

### Acesse no navegador:
👉 http://localhost:4200

### 💾 Armazenamento de Dados

Os certificados são salvos localmente no navegador via **LocalStorage**, permitindo que o histórico seja mantido entre as sessões. 
#### Cada certificado contém:

- ID único (gerado com uuid)
- Nome do participante
- Atividade
- Data emissão

### 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em **prática e aprendizado de Angular**, explorando:

- Rotas e componentes
- Injeção de dependências e serviços
- Manipulação de DOM e Canvas
- Integração com bibliotecas externas
- Persistência de dados no LocalStorage
