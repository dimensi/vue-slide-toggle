/// <reference types="Cypress" />

describe('The Home Page', function () {
  it('successfully loads', function () {
    cy.visit('/')
  })

  it('find button', () => {
    cy.get('button').should('be.visible')
  })

  it('should display content', () => {
    cy.get('button').click()
    cy.get('button + div').should('be.visible')
  })

  it('should hide content', () => {
    cy.get('button').click()
    cy.get('button + div').should('not.be.visible')
  })

  it('should be hide after 10 clicks', () => {
    for (let x = 0; x < 10; x++) {
      cy.get('button')
        .click()
    }
    cy.get('button + div').should('not.be.visible')
  })

  it('should be visible after 11 click', () => {
    for (let x = 0; x < 11; x++) {
      cy.get('button')
        .click()
    }
    cy.get('button + div').should('be.visible')
  })
})
