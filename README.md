# Desafio Stefanini - Automação com Cypress 11, BDD e POM

## Automação utilizando Cypress 11 seguindo abordagem BDD com Cucumber e padrão POM (Page Object Model)

Explicações sobre projeto e objetivos:


Integrado com:

- [x] Cucumber preprocessor https://github.com/badeball/cypress-cucumber-preprocessor 
- [x] Cypress preprocessor https://github.com/bahmutov/cypress-esbuild-preprocessor (preprocessor build)
- [x] Faker.js https://github.com/faker-js/faker (gerador de dados aleatórios)
- [x] Cucumber HTML reporter https://www.npmjs.com/package/multiple-cucumber-html-reporter
- [x] Allure reporter https://github.com/Shelex/cypress-allure-plugin

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
Execução via Browser
1. Execução via Browser
   ```sh 
   npx cypress open
   ```
Execução via CLI
1. Execução de testes via CLI e geração de json (funciona em Headless Mode): 
    ```sh 
   npm run cypress:execution  
   ```
   ```sh 
2. Atualiza report HTML na pasta reports>index.html
    ```
    
   
   
