/// <reference types="Cypress" />

describe('My First Test Suite', () =>{
    it('explains dropdown', () =>{
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#mssd').click()
        //cy.get('#msdd5').select('English')
        cy.get('.ui-corner-all').contains('Arabic').click()
        cy.get('.ui-corner-all').contains('Dutch').click()
    })
    /////select country dropdown//////
    it('explain country dropdown',() => {
        cy.get("span[role='combobox']").click({force:true})
        cy.get("input[role='textbox']").type('Den')
        cy.get("input[role='textbox']").type('{enter}')

    })
    ////slect skills/////
    it('explains skils dropdown',()=>{
        cy.get("#skills").select('Data Analytics').should('have.value','Data Analytics')
        cy.get('#skills').select('Adobe InDesign').should('have.value','Adobe InDesign')
        cy.get('#skills').select('Adobe Photoshop').should('have.value','Adobe Photoshop')
        cy.get('#skills').select('Analytics').should('have.value','Analytics')
        cy.get('#skills').select('Android').should('have.value','Android')
    })
})