//  <reference types="cypress"/>

describe('baseurl suit', () => {

    beforeEach (function() {
    cy.visit('https://alpha.discoverrr.com/')
    })

    // cy.title().should('eq', 'Discoverrr')
    
    // it.skip('Verify that user is able to successfully sign up-Possitive test case', function () {

    //     cy.get("button[tabindex='0']").click()
    //     cy.get('input[id="fname"]').type('Mark')
    //     cy.get('#lname').type('John')
    //     cy.get('#email').type('qwerty@gmail.com')
    //     cy.get('.MuiFormControl-root.css-13sljp9').click()
    //     cy.get("img[src='https://flagcdn.com/24x18/pk.png']").click()
    //     cy.get('input[id="phone-number"]').type('78789878987')
    //     cy.get('input[id="password"]').type(testdata.password)
    //     cy.get('a > .MuiButtonBase-root').click()
    //     // cy.get('.button-wrapper').click()

    // })

    it('Verify that the user is not able to login with valid email and invalid password-Negative test case', function () {

        cy.get('#email').type('qatesthub819@gmail.com')
        cy.get('#password').type('Qwerty@123')
        cy.get('.form-input-control > .MuiButtonBase-root').click()
        cy.reload()

    })

    it('Verify that the user is not able to login with invalid email and valid password', function () {
    
        cy.get('#email').type('uyuyu@gmail.com')
        cy.get('#password').type('Qwerty@12345')
        cy.get('.form-input-control > .MuiButtonBase-root').click()
        cy.reload()
    })

    it('Verify that the user is able to login with valid credentials', function () {
    
        cy.get('#email').type('qatesthub819@gmail.com')
        cy.get('#password').type('Qwerty@12345')
        cy.get('form.form-input-control > button.MuiButtonBase-root').click()
        cy.get('.add-brand-wrapper').click()
        cy.get('#brandName').type('Company Products')
        const myFile = 'j1.png'
        cy.get('#imageupload').attachFile(myFile)
        cy.get('#tagline').type('tagline')
        cy.get('#add-company-btn').click()
    })

    // it('Create a product', function () {
    //     cy.visit("/login")
    //     cy.get('#email').type('qatesthub819@gmail.com')
    //     cy.get('#password').type('Qwerty@12345')
    //     cy.get('.MuiButtonBase-root').click()
    //     cy.get('.edit-icon').click()
 })

