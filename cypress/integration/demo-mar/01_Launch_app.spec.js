/// <reference types="Cypress" />

describe('Checking launch of website',function(){

    beforeEach(function() {
        cy.visit('/')
      });

    it('requests a response from baseURL',function(){
        cy.request('/').then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    
    it('confirm the website is not empty',function(){
        expect(cy.get('#content')).to.not.be.empty
    })

    it('confirm the page title is correct',function(){
        cy.title().should('contain','Registration - Staffbase')
    })
    
});
