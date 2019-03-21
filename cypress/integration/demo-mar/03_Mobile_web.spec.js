/// <reference types="Cypress" />
describe('User can see menu-hamburger menu with a 320x568 viewport', function() {
    beforeEach(function() {
      cy.viewport(320, 568)
      cy.visit('https://www.staffbase.com')
    });

    it('User can see a menu-burger icon',function(){
        cy.get('.flex-nav__burger')
        .should('be.visible')
    })
  });