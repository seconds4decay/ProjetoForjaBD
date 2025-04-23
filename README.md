
# ProjetoForjaBD

Sistema de Gerenciamento de Forjas inspirado em RPGs medievais, com arquitetura full stack dividida entre front-end moderno com Next.js e back-end robusto em Java com Spring. O projeto foi desenvolvido com foco em boas práticas como Domain Driven Design (DDD) e separação clara de responsabilidades.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![Frontend](https://img.shields.io/badge/front--end-Next.js%20%7C%20Tailwind-blue)
![Backend](https://img.shields.io/badge/back--end-Spring%20Boot%20%7C%20MySQL-brightgreen)

---

## Funcionalidades

- Cadastro e gerenciamento de forjas, ferreiros e itens forjados.
- Integração entre front-end e back-end via API REST.
- Validação de dados e feedback visual no front-end.
- Autenticação básica e navegação protegida.

---

## Arquitetura Geral

```
Next.js (Front-end) ⇄ API REST ⇄ Spring Boot (Back-end) ⇄ MySQL
```

---

## Front-end

Implementado com foco em usabilidade e design responsivo.

### Tecnologias

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **HTML5**

### Destaques

- Estrutura de pastas por componentes e páginas.
- Requisições HTTP assíncronas para integração com a API.
- Estilização responsiva com Tailwind.
- Tipagem estática com TypeScript para maior confiabilidade.

---

## Back-end

Construído com Java 17 e arquitetura baseada em DDD, utilizando os principais módulos do ecossistema Spring.

### Tecnologias

- **Java 17**
- **Spring Boot**
- **Spring Web**
- **JDBC / MySQL Driver**
- **MySQL**

### Arquitetura (DDD + MVC)

```
src/
├── model/         ← Entidades e objetos de domínio
├── repository/    ← Interface com banco de dados (JDBC)
├── service/       ← Lógica de negócio
├── controller/    ← Endpoints REST
```

- Uso de DTOs e mapeamento entre camadas.
- Comunicação via REST API com verbos HTTP bem definidos.
- Manipulação direta com banco MySQL usando JDBC.

---

## Como Executar

### Pré-requisitos

- MySQL instalado e rodando
- Node.js + npm/yarn
- Java 17
- Maven

### 1. Clone o repositório:

```bash
git clone https://github.com/seconds4decay/ProjetoForjaBD.git
```

### 2. Rode os Script de Criação do Banco de Dados no seu Editor de SQL

```bash
cd scripts/
```

### 2. Configure o banco de dados no `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/forjadb
spring.datasource.username=root
spring.datasource.password=suasenha
```

### 3. Execute o back-end:

```bash
cd backend/
./mvnw spring-boot:run
```

### 4. Execute o front-end:

```bash
cd frontend/
npm install
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## ✍️ Desenvolvedor

- Lucas Ferreira - [@seconds4decay](https://github.com/seconds4decay)
- Felipe França [@FelipeARFranca](https://github.com/FelipeARFranca)
- Luis Gustavo Melo [@Luis-Gustavo-Melo](https://github.com/Luis-Gustavo-Melo)

---

## 📄 Licença

Este projeto está licenciado sob os termos da licença MIT.
