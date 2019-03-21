// Basic UI check sample code
/// <reference types="Cypress" />

describe('Checking launch of website',function(){

    beforeEach(function() {
        cy.visit('/')
      });

    it('requests a response from baseURL',function(){
        cy.request('/').then((response) => {
            expect(response.status).to.eq(200)
        })
    });

    it('confirm the website is not empty',function(){
        expect(cy.get('#content')).to.not.be.empty
    });

    it('confirm the page title is correct',function(){
        cy.title().should('contain','Registration - Staffbase')
    });
});

describe('Associated UI elements are present',function(){
    beforeEach(function(){
        cy.visit('/')
    });
    
    it('Page content is present',function(){
        cy.get('.page-content').should('not.be.empty')
    });

    it('Logo is present',function(){
        cy.get('.logo')
    });

    it('Sign-up form UI check 1 - visible tabs',function(){
        cy.get('.signup')
        .should('exist')

        cy.get('.chooser > .login')
        .should('exist')
    })

    it('Sign-up form UI check 2 - Header',function(){
        cy.get('#content > div > div.login-container > form > h3')
        .then(($h3Header) => {
            let h3_header_text = $h3Header.text()
            expect(h3_header_text).to.be.eql('Create a new account:')
        })
        
    })

    it('Footer has T&C and Privacy Policy links',function(){
        //terms and conditions - URI check
        cy.get('#content > div > div.login-container > div > a:nth-child(1)')
        .should('have.attr', 'href').and('include','https://staffbase.com/en/terms/')
        
        //terms and conditions - text check
        cy.get('#content > div > div.login-container > div > a:nth-child(1)')
        .contains('Terms of Service')

        //privacy policy - URI check
        cy.get('#content > div > div.login-container > div > a:nth-child(2)')
        .should('have.attr', 'href').and('include','https://staffbase.com/en/privacy-policy-app/')

        //privacy policy - text check
        cy.get('#content > div > div.login-container > div > a:nth-child(2)')
        .contains('Privacy Policy')
    });

    it("User can see a clickable 'Sign in using Company email' button",function(){
        cy.get('.signup-form > :nth-child(2)')
        .contains("I've got a company email")

        cy.get('.signup-form > :nth-child(2)')
        .click()
    });

    it("User can see a clickable 'I have an Access code' button ",function(){
        cy.get('.signup-form > :nth-child(4)')
        .contains("I've got an access code")

        cy.get('.signup-form > :nth-child(4)')
        .click()
    });

});