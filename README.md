
  # Criar design personalizado

  The original project is available at https://www.aeracloud.com.br

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploy do formulário de leads (Firebase)

  O CLI do Firebase vem como dependência do projeto. Na raiz do repositório:

  ```bash
  npm install
  npm run deploy:backend
  ```

  Na primeira vez, faça login e selecione o projeto `aera-cloud`:

  ```bash
  npx firebase login
  npx firebase use aera-cloud
  ```

  Leads ficam no Firestore → coleção `leads`. O site (hosting) continua pelo GitHub Actions ou `npm run deploy:hosting`.

  **Alternativa:** instalar o CLI globalmente com `npm install -g firebase-tools` e usar `firebase deploy --only functions,firestore:rules`.

