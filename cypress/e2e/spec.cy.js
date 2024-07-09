/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Maria')
    cy.get('#signup-lastname').type('José')
    cy.get('#signup-email').type('mariajose@email.com')
    cy.get('#signup-phone').type('31995234175')
    cy.get('#signup-password').type('Teste&3032')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})