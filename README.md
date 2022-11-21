# Desafio Stefanini - Automação com Cypress 11, BDD e POM

##### Automação utilizando Cypress 11 seguindo abordagem BDD com Cucumber e padrão POM (Page Object Model)

Explicações sobre projeto e objetivos (instalação, execução de testes no browser e CLI, geração de reports automatizados e explicação sobre código e abordagens):

Clique na imagem para assistir o vídeo:[![Assista o vídeo no Youtube](https://user-images.githubusercontent.com/40446104/203106029-02c37380-741d-45aa-b534-2bbef82fc3bd.png)](https://youtu.be/cVNtG190ZwI)


## 🔧 Funcionalidades
- Automação de testes utilizando Cucumber e POM (Page Object Model)
- Geração de massa de dados aleatórios utilizando Faker.JS
- Geração de reports automatizados utilizando Cucumber HTML Report
- Screenshots são salvos automaticamentes SE houver falha na execução dos testes em cypress>screenshots (na execução por CLI)
- Gravação automatica salva em cypress>videos

## 🔴 Pré-requisitos

1. Node JS 14.19.0(ou superior)

## 🚀 Instale o projeto

1. Clone o repositório via terminal
   ```sh
   git clone https://github.com/marcosdgomes/stefanini-challenge
   ```
3. Instale as dependências e pacotes NPM
   ```sh
   npm install
   ```

## 💻 Execute o projeto via terminal:

### Execução via Browser
1. Execute o comando usando terminal na raíz do projeto
   ```sh 
   npx cypress open
   ```
 2. Após o carregamento, selecione a opção E2E Testing
 3. Selecione o navegador desejado e clique em "Start E2E Testing {browser}"
 4. Execute o teste .feature disponível
 
### Execução via CLI e geração de report na pasta reports>index.html
1. Execução de testes via CLI, gera JSON para report e exibe resultados (funciona em Headless Mode): 
    ```sh 
   npm run cypress:execution  
   ```
   
2. Atualiza report HTML na pasta reports>index.html
   ```sh 
    node .\cucumber-html-report.js
    ```
    
## 📖 Dependências

Integrado com:
- [x] Cucumber preprocessor https://github.com/badeball/cypress-cucumber-preprocessor 
- [x] Cypress preprocessor https://github.com/bahmutov/cypress-esbuild-preprocessor (preprocessor build)
- [x] Faker.js https://github.com/faker-js/faker (geração de dados aleatórios)
- [x] Cucumber HTML reporter https://www.npmjs.com/package/multiple-cucumber-html-reporter
    
 
   
