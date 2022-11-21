# Desafio Stefanini - Automação utilizando Cypress 11, segunido abordagem BDD e padrão Page Object Model

## Cypress 11 com BDD e Cucumber

Integrado com:

- [x] Cucumber preprocessor https://github.com/badeball/cypress-cucumber-preprocessor 
- [x] Cypress preprocessor https://github.com/bahmutov/cypress-esbuild-preprocessor (preprocessor build)
- [x] Faker.js https://github.com/faker-js/faker (gerador de dados aleatórios)
- [x] Cucumber HTML reporter https://www.npmjs.com/package/multiple-cucumber-html-reporter
- [x] Allure reporter https://github.com/Shelex/cypress-allure-plugin

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pré-requisitos

1. Node JS 14.19.0(ou superior)
2. Opcional: Java 8 para execução do Allure Reporter

## 🚀 Instale o projeto

2. Clone the repo
   ```sh
   git clone https://github.com/marcosdgomes/stefanini-challenge
   ```
3. Instale as dependências e pacotes NPM
   ```sh
   npm install
   ```

## Execute o projeto:

1. Execução via CLI e geração de json (funciona em Headless Mode): 
    ```sh 
   npm run cypress:execution  
   ``````sh 
2. Atualiza report HTML na pasta reports>index.html
    ```sh 
2.
3. Allure Report: 
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
   
   
