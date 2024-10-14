# Lab Chat

[![Author](https://img.shields.io/badge/author-wevertoum-8257E5?style=flat-square)](https://weverton.me)

Tempo de desenvolvimento:

[![wakatime](https://wakatime.com/badge/user/23a27b6b-815f-4cef-8a6c-21bdf1f9c3ed/project/ac02bf54-2f2d-4105-913e-4a8a856d37ec.svg)](https://wakatime.com/badge/user/23a27b6b-815f-4cef-8a6c-21bdf1f9c3ed/project/ac02bf54-2f2d-4105-913e-4a8a856d37ec)

Bem-vindo ao **Lab Chat**, uma aplicação de chat responsiva que integra com a API gratuita do ChatGPT para fornecer respostas às suas perguntas.

## Demo

Você pode acessar a versão online da aplicação aqui: [Lab Chat](https://lab-chat-it.vercel.app/)

## Funcionalidades

- **Design Responsivo:** Adapta-se perfeitamente a qualquer dispositivo, garantindo uma ótima experiência de usuário em dispositivos móveis, tablets e desktops.
- **Integração com ChatGPT:** Utiliza a API gratuita do ChatGPT para fornecer respostas precisas e relevantes às consultas dos usuários.
- **Interface de Usuário Intuitiva:** Construída com uma interface limpa e amigável usando Tailwind CSS para estilização.

## Tecnologias Utilizadas

- **React.js:** Uma biblioteca JavaScript para construir interfaces de usuário, permitindo o desenvolvimento de aplicações web dinâmicas e interativas.
- **Next.js:** Um framework React que fornece renderização do lado do servidor e geração de sites estáticos, melhorando o desempenho e SEO.
- **Tailwind CSS:** Um framework CSS utilitário que permite o desenvolvimento e a personalização rápida da interface do usuário sem sair do HTML.
- **@ai-sdk/openai:** Um SDK para interagir com a API do ChatGPT, permitindo a geração de respostas de texto de alta qualidade.
## Estrutura de Pastas

A estrutura do projeto é organizada da seguinte forma (src):

```
.
├── actions
│   └── setTheme.ts
├── app
│   ├── api
│   │   └── chatgpt
│   │       └── route.ts
│   ├── chat
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── profile
│       ├── page.tsx
│       └── preferences
│           ├── edit-information
│           │   └── page.tsx
│           ├── invite-friends
│           │   └── page.tsx
│           └── page.tsx
├── components
│   ├── ChatExamples.tsx
│   ├── CopyInviteCode.tsx
│   ├── DisplayMessage.tsx
│   ├── FooterMenu.tsx
│   ├── InputChat.tsx
│   ├── InputGeneric.tsx
│   ├── MessagesList.tsx
│   ├── NavigationOnboarding.tsx
│   ├── PageCarousel.tsx
│   ├── PageContainer.tsx
│   ├── PreferenceItem.tsx
│   ├── RegenerateIcon.tsx
│   ├── RenderDotsOnboarding.tsx
│   ├── SplashScreen.tsx
│   ├── ToggleTheme.tsx
│   └── icons
│       ├── AccountIcon.tsx
│       ├── ArrowIcon.tsx
│       ├── ArrowSendIcon.tsx
│       ├── ChevronIcon.tsx
│       ├── ClockIcon.tsx
│       ├── CopyPasteIcon.tsx
│       ├── DefaultDotIcon.tsx
│       ├── EyeIcon.tsx
│       ├── HouseIcon.tsx
│       ├── Invite
│       ├── InviteFriendsIcon.tsx
│       ├── LockIcon.tsx
│       ├── LogoChatIcon.tsx
│       ├── LogoutIcon.tsx
│       ├── MenuGroupedIcon.tsx
│       ├── MenuIcon.tsx
│       ├── PaymentIcon.tsx
│       ├── PersonIcon.tsx
│       ├── SelectedDotIcon.tsx
│       ├── SettingsIcon.tsx
│       ├── SupportIcon.tsx
│       └── illustrations
│           └── InviteFriendsIllustration.tsx
├── contexts
│   └── AppThemeProvider.tsx
├── hooks
│   └── useChatGPT.ts
├── models
│   ├── Message.d.ts
│   ├── PageCarousel.d.ts
│   └── ResponseChat.d.ts
└── utils
    ├── constants.ts
    └── generateUUID.ts
```

## Testes

Devido ao prazo para o desenvolvimento, os casos de teste se concentraram principalmente em grandes funções, com foco na verificação de renderização correta das páginas. Isso assegura que os componentes principais da aplicação estão funcionando como esperado. Além disso, a aplicação faz uso extensivo de **componentes reutilizáveis** e **escaláveis**, permitindo fácil manutenção e expansão no futuro.

## Começando

Para executar o projeto localmente, siga estes passos:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/wevertoum/lab-chat-it.git
   cd lab-chat-it
   ```

2. **Instale as dependências:**

   ```bash
   yarn install
   ```

3. **Execute o servidor de desenvolvimento:**

   ```bash
   yarn dev
   ```

4. **Abra seu navegador e navegue até:**

   ```
   http://localhost:3000
   ```

5. **Para rodar os testes:**

   ```bash
   yarn test
   ```

6. **Deploy da aplicação:**

   Para fazer o deploy da aplicação, basta commitar as alterações na branch `master` e o deploy da aplicação será feito automaticamente na Vercel.
