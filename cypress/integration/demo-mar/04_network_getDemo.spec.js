//Basic API call and response body checks sample code
/// <reference types="Cypress" />
beforeEach(function(){
    cy.server()
});

describe('GET - Playing with APIs',function(){
   
    it('Checking essential data from GET call',function(){
        cy.route('GET', '/api/users/2', 'fixture:04_getDemo') 
        //stubbing is not essential in this example since the state of the API call always returns the same value, but has been added as an example.
        cy.request('/api/users/2')
            .its('headers')     
			.its('content-type')      
            .should('include', 'application/json')
        })

    it('Response from the GET call does not return empty-handed',function(){
        cy.route('GET', '/api/users/2', 'fixture:04_getDemo')
        cy.request('/api/users/2')
            .then((response) => {
            expect(response.body).to.not.be.empty
        })
    })

    it('The property:value pairs are as expected',function(){
        cy.route('GET', '/api/users/2', 'fixture:04_getDemo')
        cy.request('/api/users/2')
            .then((response) => {
            cy.wrap(response.body)
            //ic check
            .its('data.id').should('eq', 2)
            //first name check
            cy.wrap(response.body)
            .its('data.first_name').should('eq','Janet')
            //last name check
            cy.wrap(response.body)
            .its('data.last_name').should('eq','Weaver')
            //avatar check
            cy.wrap(response.body)
            .its('data.avatar').should('eq','https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg')
        })
    })
});