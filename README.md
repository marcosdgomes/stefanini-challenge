# Desafio Stefanini - Cypress com Page Object

> Cypress 11 com BDD e Cucumber

### 💻 Tópicos

Integrado com:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://github.com/faker-js/faker
- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter
- [x] https://github.com/Shelex/cypress-allure-plugin

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pré-requisitos

1. Node JS 12(ou superior)
2. Opcional: Java 8 para execução do Allure Reporter

## 🚀 Instale o projeto

2. Clone the repo
   ```sh
   git clone https://github.com/marcosdgomes/
   ```
3. Instale as dependências e pacotes NPM
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
## Execute o projeto:

1. Execução via Browser: npm run cypress:execution
2. Allure Report: 
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
   4. You'll get a report like this one: GitHub Page - Allure Report Sample: https://joanesquivel.github.io/cypress-cucumber-boilerplate/