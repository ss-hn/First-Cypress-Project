
describe('Creat Product', function () {

    it('Verify that the user is able to create a new product', function () {
        cy.visit("https://alpha.discoverrr.com/login")
        cy.url().should('contain', 'discoverrr.com')
        cy.get('#email').type('qatesthub819@gmail.com')
        cy.get('#password').type('Qwerty@12345')
        cy.get('.form-input-control > .MuiButtonBase-root').click()
        cy.wait(4000)
        cy.get('.edit-icon').click()

    })

})