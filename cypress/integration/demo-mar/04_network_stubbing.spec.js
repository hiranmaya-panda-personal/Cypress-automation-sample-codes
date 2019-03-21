/// <reference types="Cypress" />
beforeEach(function(){
    cy.server()
});

describe('GET stubbing demo',function(){
   
    it('Get User demo - 1',function(){
        cy.route('GET', '/api/users/2', 'fixture:04_getDemo')
        cy.request('/api/users/2')
            .its('headers')     
			.its('content-type')      
            .should('include', 'application/json')
        })

    it('Get User demo - 2',function(){
        cy.route('GET', '/api/users/2', 'fixture:04_getDemo')
        cy.request('/api/users/2')
            .then((response) => {
            expect(response.body).to.not.be.empty
        })
    })

    it('Get User demo - 3',function(){
        //cy.route('GET', '/api/users/2', 'fixture:04_getDemo')
        cy.request('/api/users/2')
            .then((response) => {
            cy.wrap(response.body).its('data.id').should('eq', 2)
            //expect(response.body).to.have.property('data.id')
        })
    })
});
