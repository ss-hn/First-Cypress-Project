
class login {
    setEmail(email) {
        cy.get('#email').type(email)
    }

    setPassword(password)
     {
        cy.get('#password').type(password)
    }


    clickSubmit()
     {
        cy.get('form.form-input-control > button.MuiButtonBase-root').click()

    }
    verifyLogin()
    {
        cy.get('.menu.selected').should('have.value', '')
    }
}
export default login