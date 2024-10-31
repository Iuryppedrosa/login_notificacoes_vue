---

# 🎓 Projeto de Estudos Vue.js com TypeScript e Pinia

Bem-vindo ao meu projeto de estudos! 🚀 Este projeto foi desenvolvido com o objetivo de explorar as tecnologias Vue.js, TypeScript e Pinia, além de aplicar boas práticas no desenvolvimento de uma aplicação web.

## 🌐 Visão Geral

Esta aplicação simula um sistema de autenticação e notificações para um usuário, permitindo que ele faça login, visualize notificações, e deslogue. A interface é interativa e estilizada, proporcionando uma boa experiência ao usuário! 🧑‍💻

### 🔥 Funcionalidades Principais
- **Login e Logout**: Autenticação de usuário simulada com armazenamento de token.
- **Notificações do Usuário**: Exibição de notificações com interface expandida e barra de rolagem.
- **Feedback de Erros e Sucessos**: Notificações visuais coloridas para status de login (verde para sucesso, vermelho para erro).
  
---

## ⚙️ Tecnologias Utilizadas

Este projeto faz uso de diversas tecnologias modernas para criar uma aplicação reativa e robusta:

- **Vue.js** - Framework JavaScript progressivo para construção de interfaces de usuário.
- **Vue Router** - Gerenciamento de rotas para navegação entre as páginas.
- **Pinia** - Gerenciamento de estado global, facilitando o compartilhamento de dados e lógica entre componentes.
- **TypeScript** - Superset do JavaScript que adiciona tipos e maior segurança ao código.
- **Bootstrap** e **Bootstrap Vue 3** - Frameworks CSS para criar uma interface responsiva e moderna.

---

## 📂 Estrutura do Projeto

Uma visão geral de como o projeto está organizado:

```plaintext
📁 src/
├── 📁 components/        # Componentes Vue isolados (UI e lógicas específicas)
│   └── NotificacoesComponent.vue
├── 📁 _stores/           # Gerenciamento de estado usando Pinia (e.g., authStore)
├── 📁 _services/         # Serviços para chamada de APIs (e.g., authService e notificationService)
├── 📁 types/             # Definições de tipos TypeScript
│   └── auth.ts           # Tipos relacionados a autenticação
├── 📁 views/             # Componentes Vue relacionados às páginas
│   ├── HomeView.vue
│   └── LoginView.vue
└── App.vue               # Componente raiz da aplicação
```

### 📌 Principais Pastas e Arquivos

- **\_stores/**: Contém a `authStore`, gerenciando o estado global de autenticação e operações de login e logout.
- **\_services/**: Serviços de API organizados, como `authService` para autenticação e `notificationService` para gerenciamento de notificações.
- **types/**: Tipos TypeScript que definem contratos para dados esperados em cada serviço.
- **views/**: Telas principais da aplicação, incluindo `LoginView` e `HomeView` (página inicial com as notificações).

---

## 🚀 Como Rodar o Projeto

Clone o projeto e siga os passos abaixo para instalar e rodar a aplicação em ambiente de desenvolvimento:

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/seuusuario/seuprojeto.git
   cd seuprojeto
   ```

2. **Instale as Dependências**:

   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento**:

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**:
   Acesse em [http://localhost:3000](http://localhost:3000) para ver a aplicação no navegador.

---

## 📜 Autenticação e Notificações

O fluxo de autenticação envolve as seguintes etapas:

- **Login**: Usuário insere credenciais e, ao fazer login, recebe um token de autenticação armazenado no `authStore`.
- **Logout**: Ao deslogar, o token é removido, e o usuário é redirecionado para a tela de login.
- **Notificações**: O usuário pode ver notificações em uma lista expansível, que é carregada a partir de `notificationService`.

---

## 🔄 Estado Global - Pinia

O **Pinia** é utilizado para o gerenciamento de estado global da aplicação:

- **authStore**: Armazena informações de autenticação, como o token, guias do usuário e outras informações importantes.
- **Métodos principais**: `login` e `logout`, para autenticação e gerenciamento de sessão.

---

## 🔌 Services

Os serviços API estão isolados em `authService` e `notificationService`. Usamos o Axios para enviar as requisições HTTP com as devidas configurações e tratativas de erros.

---

## 🛠️ Boas Práticas e Aprendizados

- **Componentização**: Cada componente tem uma função clara e é reutilizável.
- **Uso de TypeScript**: Para definir os tipos e garantir maior segurança.
- **Separação de Lógica**: Stores, serviços e tipos foram organizados em suas respectivas pastas.
- **Gerenciamento de estado com Pinia**: Tornou mais simples compartilhar estado entre os componentes e implementar a lógica de autenticação.

---

## 📚 Próximos Passos

1. **Refinamento de UI**: Adicionar animações e feedbacks visuais.
2. **Integração Completa com Backend**: Caso seja desejado, criar endpoints para autenticação real.
3. **Mais Testes**: Garantir que o sistema está resiliente e funciona em vários cenários.

---

💡 **Observação**: Este projeto é um estudo, ideal para quem deseja aprender sobre Vue.js, TypeScript e Pinia. Qualquer contribuição ou sugestão é bem-vinda!

---

Desenvolvido com 💙 e muita curiosidade!
