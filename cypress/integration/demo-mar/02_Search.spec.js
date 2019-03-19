// Basic Functionality Sample Code
/// <reference types="Cypress" />

describe('Testing the Search functionality',function(){
    
    beforeEach(function(){
        cy.visit('https://www.staffbase.com')
        cy.fixture('02_search.json').as('searchParameter')
    });
    
    it('User can see a clickable-search icon',function(){
        //Search icon
        cy.get('.item-1 > .flex-nav__group > .flex-nav__group-item > .flex-nav__link')
        .click()
    });

    it('User can see an expanded search bar',function(){
        cy.get('.item-1 > .flex-nav__group > .flex-nav__group-item > .flex-nav__link')
        .click()
        
        //Expanded Search bar
        cy.get('.search-form-container > .search-form > #search')
        .should('be.visible')
    });

    it('User can input search query',function(){
        cy.get('.item-1 > .flex-nav__group > .flex-nav__group-item > .flex-nav__link')
        .click()

        cy.get('.search-form-container > .search-form > #search')
        .type(this.searchParameter.validQuery)
        .type('{enter}')
    });

    it('User is shown a message if no results are available',function(){
        cy.get('.item-1 > .flex-nav__group > .flex-nav__group-item > .flex-nav__link')
        .click()
        
        cy.get('.search-form-container > .search-form > #search')
        .type(this.searchParameter.invalidQuery)
        .type('{enter}')
        
        cy.get('h1')
        .should('contain','0 Search results found for: '+this.searchParameter.invalidQuery)
    });

    it('User is shown the correct number of results for a valid search query',function(){
        cy.get('.item-1 > .flex-nav__group > .flex-nav__group-item > .flex-nav__link')
        .click()
        
        cy.get('.search-form-container > .search-form > #search')
        .should('be.visible')
        .type(this.searchParameter.validQuery)
        .type('{enter}')

        cy.get('h1')
        .then(($header) => {
            let headerFullText = $header.text()
            let headerFirstWord = headerFullText.replace(/ .*/,' ')
            let headerNumberOfResults = parseInt(headerFirstWord,10)
            expect(headerFullText).to.eql(headerNumberOfResults+' Search results found for: '+this.searchParameter.validQuery)
        })
    });
})