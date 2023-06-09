context('Login', function () {

    it.only('Verify that the user is not able to login with valid email and invalid password-Negative test case', function () {
        cy.visit("https://alpha.discoverrr.com/login")
        cy.title().should('eq', 'Discoverrr')
        cy.get('#email').type('Alisha@gmail.com')
        // cy.get('#email').should('have.class', 'MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq').
        cy.get('#password').type('Qwerty@123')
        cy.get('.form-input-control > .MuiButtonBase-root').click()
        cy.reload()

    })

    it('Verify that the user is not able to login with invalid email and valid password', function () {
        cy.visit("https://alpha.discoverrr.com/login")
        cy.get('#email').type('uyuyu@gmail.com')
        cy.get('#password').type('Qwerty@12345')
        cy.get('.form-input-control > .MuiButtonBase-root').click()
        cy.reload()
    })

    it('Verify that the user is able to login with valid credentials', function () {
        cy.visit("https://alpha.discoverrr.com/login")
        cy.get('#email').type('qatesthub819@gmail.com')
        cy.get('#password').type('Qwerty@12345')
        cy.get('form.form-input-control > button.MuiButtonBase-root').click()

    })
})