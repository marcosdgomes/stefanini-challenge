Feature: Cadastro de usuários

    Background:
        Given usuário visita a página inicial
    Scenario: Acessa site e valida conteúdo carregado
        Then página deve ser carregada corretamente e titúlo deve ser igual 'Cadastro de usuários'

    Scenario: usuário não insere 'nome' completo e tenta criar cadastro
        When usuário não insere Nome completo, mas insere 'Email' e 'Senha' e clica em 'Cadastrar'
        Then campo Nome deve ser validado exibindo a mensagem 'O campo Nome é obrigatório.'

    Scenario: usuário não insere 'email' e tenta criar cadastro
        When usuário não insere Email, mas insere 'Nome' e 'Senha' e clica em 'Cadastrar'
        Then campo Email deve ser validado exibindo a mensagem 'O campo E-mail é obrigatório.'

    Scenario: usuário não insere 'senha' e tenta criar cadastro
        When usuário não insere senha, mas insere 'Nome' e 'Email'
        Then campo Senha deve ser validado exibindo a mensagem 'O campo Senha é obrigatório.'

    Scenario: usuário não preenche nenhum campo e tenta criar cadastro
        When usuário não preenche nenhum dos campos e clica em 'Cadastrar'
        Then validação deve ser exibida para todos os campos não preenchidos 'O campo Nome é obrigatório, O campo Email é obrigatório, O campo Senha é obrigatório'

    Scenario: usuário preenche com 'nome' incompleto e tenta criar cadastro
        When usuário preenche com Nome incompleto, mas preenche 'Email' e 'Senha' corretamente
        Then campo deve ser validado com a mensagem 'Por favor, insira um nome completo'

    Scenario: usuário preenche com 'email' inválido e tenta criar cadastro
        When usuário preenche campo com 'Email' inválido, mas preenche 'Nome' e 'Senha' corretamente
        Then campo deve ser validado com a mensagem 'Por favor, insira um e-mail válido'
    
    Scenario: usuário preenche 'senha' com menos de 8 caracteres  e tenta criar cadastro
        When usuário preenche com senha menor que 8 caracteres, mas preenche 'Nome' e 'Email' corretamente
        Then campo deve ser validado com a mensagem 'A senha deve conter ao menos 8 caracteres'
    Scenario: usuário preenche todos os campos corretamente e realiza cadastro
        When usuário preenche os campos 'Nome', 'Email' e 'Senha' e clica em 'Cadastrar'
        Then registro do usuário deve ser exibido abaixo do formulário

    Scenario: usuário exclui registro cadastrado
        When usuário clica em 'Excluir' ao lado do registro criado
        Then registro do usuário deixa de ser exibido