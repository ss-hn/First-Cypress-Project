 describe('image upload suit', () => {

 it('Verify that the user is able to login with valid credentials', function () {
    
    cy.visit("https://alpha.discoverrr.com/login")
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
 })
