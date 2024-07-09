/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });


  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email= `adriana${Date.now()}@email.com`
    cy.preencherCadastro('Adriana', 'Campos', email, '31997462587', 'Teste@8471')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Adriana30', 'Campos', 'adriana@teste.com', '31994521763', 'Teste!123456')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  });
})