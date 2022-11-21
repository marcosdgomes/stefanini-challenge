// reg = alias para import dos pagemodels do Registration Form //
const reg = require('../../pages/RegisterPage');
import { Given, When, Then, } from '@badeball/cypress-cucumber-preprocessor';

Given("usuário visita a página inicial", (acessaUrl) => {
    reg.default.visitBaseUrl(acessaUrl)
});

Then("página deve ser carregada corretamente e titúlo deve ser igual 'Cadastro de usuários'", (verificaTitulo) => {
    reg.default.verifyPageTitle(verificaTitulo)
});

When("usuário não insere Nome completo, mas insere 'Email' e 'Senha' e clica em 'Cadastrar'", (senha,email,botaoCadastrar) => {
    reg.default.typePassword(senha)
    reg.default.typeEmail(email)
    reg.default.clickLogin(botaoCadastrar)
});

Then("campo Nome deve ser validado exibindo a mensagem 'O campo Nome é obrigatório.'", (validacaoNome) => {
    reg.default.validadeErrorName(validacaoNome)
});

When("usuário não insere Email, mas insere 'Nome' e 'Senha' e clica em 'Cadastrar'", (nome,senha,botaoCadastrar) => {
	reg.default.typeName(nome)
    reg.default.typePassword(senha)
    reg.default.clickLogin(botaoCadastrar)
});

Then("campo Email deve ser validado exibindo a mensagem 'O campo E-mail é obrigatório.'", (validacaoEmail) => {
    reg.default.validadeErrorEmail(validacaoEmail)
});

When("usuário não insere senha, mas insere 'Nome' e 'Email'", (nome,email,botaoCadastrar) => {
	reg.default.typeName(nome)
    reg.default.typeEmail(email)
    reg.default.clickLogin(botaoCadastrar)
});

Then("campo Senha deve ser validado exibindo a mensagem 'O campo Senha é obrigatório.'", (validacaoSenha) => {
    reg.default.validadeErrorPassword(validacaoSenha)
});


When("usuário não preenche nenhum dos campos e clica em 'Cadastrar'", (botaoCadastrar) => {
    reg.default.clickLogin(botaoCadastrar)
});

Then("validação deve ser exibida para todos os campos não preenchidos 'O campo Nome é obrigatório, O campo Email é obrigatório, O campo Senha é obrigatório'", (validacaoNome,validacaoEmail,validacaoSenha) => {
    reg.default.validadeErrorName(validacaoNome)
    reg.default.validadeErrorEmail(validacaoEmail)
    reg.default.validadeErrorPassword(validacaoSenha)
});

When("usuário preenche com Nome incompleto, mas preenche 'Email' e 'Senha' corretamente", (validacaoNome,validacaoEmail,validacaoSenha,botaoCadastrar) => {
    reg.default.typeUsername(validacaoNome)
    reg.default.typeEmail(validacaoEmail)
    reg.default.typePassword(validacaoSenha)
    reg.default.clickLogin(botaoCadastrar)
});

Then("campo deve ser validado com a mensagem 'Por favor, insira um nome completo'", (validacaoNomeIncompleto) => {
    reg.default.validadeErrorIncompleteName(validacaoNomeIncompleto)
});

When("usuário preenche campo com 'Email' inválido, mas preenche 'Nome' e 'Senha' corretamente", (validacaoEmail,validacaoNome,validacaoSenha,botaoCadastrar) => {
	reg.default.typeIncorretEmail(validacaoEmail)
    reg.default.typeName(validacaoNome)
    reg.default.typePassword(validacaoSenha)
    reg.default.clickLogin(botaoCadastrar)

});

Then("campo deve ser validado com a mensagem 'Por favor, insira um e-mail válido'", (validacaoEmail) => {
    reg.default.validateInvalidEmail(validacaoEmail)
});

When("usuário preenche com senha menor que 8 caracteres, mas preenche 'Nome' e 'Email' corretamente", (validacaoNome,validacaoEmail,validacaoSenha,botaoCadastrar) => {
    reg.default.typeName(validacaoNome)
    reg.default.typeEmail(validacaoEmail)
    reg.default.typeIncorretPassword(validacaoSenha)
    reg.default.clickLogin(botaoCadastrar)
});

Then("campo deve ser validado com a mensagem 'A senha deve conter ao menos 8 caracteres'", (validacaoSenha) => {
    reg.default.validateInvalidPassword(validacaoSenha)
});

When("usuário preenche os campos 'Nome', 'Email' e 'Senha' e clica em 'Cadastrar'", (nome,email,senha,botaoCadastrar) => {
	reg.default.typeName(nome)
    reg.default.typeEmail(email)
    reg.default.typePassword(senha)
    reg.default.clickLogin(botaoCadastrar)
});

Then("registro do usuário deve ser exibido abaixo do formulário", (verificaPrimeiroId) => {
	reg.default.validateFirstUser(verificaPrimeiroId)
});

When("usuário clica em 'Excluir' ao lado do registro criado", (nome,email,senha,botaoCadastrar,excluiCadastro) => {
    reg.default.typeName(nome)
    reg.default.typeEmail(email)
    reg.default.typePassword(senha)
    reg.default.clickLogin(botaoCadastrar)
	reg.default.deleteRegister(excluiCadastro)
});

Then("registro do usuário deixa de ser exibido", () => {
	return true;
});
