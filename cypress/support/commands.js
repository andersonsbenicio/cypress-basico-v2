Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Anderson')
    cy.get('#lastName').type('Benicio')
    cy.get('#email').type('andersonbenicio@teste.com')
    cy.get('#phone').type('71999999999')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})