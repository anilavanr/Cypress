/// <reference types="Cypress" />

describe('My First Test Suite', () =>{
    it('visit demoqa website',()=>{
        cy.visit(' https://demoqa.com/')
        cy.get('.category-cards').should('be.visible')
        cy.get('.card-body').should('be.visible')
        cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5').should('include.text','Elements')
        cy.get('#app > div > div > div.home-body > div > div:nth-child(2) > div > div.card-body > h5').should('include.text','Forms')
        cy.get('#app > div > div > div.home-body > div > div:nth-child(3) > div > div.card-body > h5').should('include.text','Alerts, Frame & Windows')
        cy.get('#app > div > div > div.home-body > div > div:nth-child(4) > div > div.card-body > h5').should('include.text','Widgets')
        cy.get('#app > div > div > div.home-body > div > div:nth-child(5) > div > div.card-body > h5').should('include.text','Interactions')
        cy.get('#app > div > div > div.home-body > div > div:nth-child(6) > div > div.card-body > h5').should('include.text','Book Store Application')
    })

    ///checking element clicking option and url
    it('Checking the url',()=>{
        // cy.visit('https://demoqa.com/')
        cy.get('#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5').click()
        // cy.check(URL)
    })

    it('Test1',()=>{
        cy.get('#item-0 > span').contains('<span class="text">Text Box</span>').click()

    })
})