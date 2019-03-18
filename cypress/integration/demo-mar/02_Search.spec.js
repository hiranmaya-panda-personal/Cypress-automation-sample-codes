/// <reference types="Cypress" />

describe('Testing the Search functionality',function(){
    beforeEach(function(){
        cy.visit('https://www.staffbase.com')
    });
    
    it('User can see a search icon',function(){
        const searchIcon = cy.get('.item-1 > .flex-nav__group > .flex-nav__group-item > .flex-nav__link')
        searchIcon.click()
    });

    it('User can see an expanded search bar with pre-filled text',function(){
        const searchFormContainer = cy.get('.search-form-container > .search-form > #search')
        cy.get('searchFormContainer').contains('Search staffbase.com')
    });
})