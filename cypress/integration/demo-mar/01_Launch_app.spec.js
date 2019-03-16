/// <reference types="Cypress" />

describe('Server returns HTTP OK status',function(){
    it('requests a response from baseURL',function(){
        cy.request('https://app.staffbase.com').then((response) => {
            expect(response.status).to.eq(200)
        }

        )
    })
})

describe('Check the UI of landing page',function(){
    it('visit the website',function(){
        cy.visit('http://app.staffbase.com')
        expect(cy.get('#content')).to.not.be.empty
    })
}

)