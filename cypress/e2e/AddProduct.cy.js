
describe('Create Product', function () {

    it('Verify that the user is able to create a new product', function () {
        cy.visit("https://alpha.discoverrr.com/login")
        cy.url().should('contain', 'discoverrr.com')
        cy.get('#email').type('qatesthub819@gmail.com')
        cy.get('#email').should('have.value', 'qatesthub819@gmail.com')
        cy.get('#password').type('Qwerty@12345')
        cy.get('#password').should('have.value', 'Qwerty@12345')
        cy.get('.form-input-control > .MuiButtonBase-root').click()
        cy.get('.form-input-control > .MuiButtonBase-root').should('have.value', '')
        cy.wait(8000)
        cy.get('.edit-icon').click()
        cy.get('.edit-icon').should('have.value', '')
        cy.wait(8000)
        cy.url().should('contain', 'https://alpha.discoverrr.com/editproduct/fd20c95e-3846-4879-a840-bf53f6fb95fd')
        cy.get('.product-preview-wrapper > .heading').should('have.value', '')
        // Add product name
        cy.get('#productName').clear({ force: true })
        cy.wait(8000)
        cy.get('#productName').type('Shoes', { force: true })
        cy.get('#productName').should('have.value', 'Shoes')
        // Add SKU id
        cy.get('#Itemcode').clear({ force: true })
        cy.wait(8000)
        cy.get('#Itemcode').type('666', { force: true })
        cy.get('#Itemcode').should('have.value', '666')
        cy.get('.add-image-wrap').trigger('mouseover')
        cy.get('.add-image-wrap').click()
        cy.get('.drop-image').click({ force: true })
        const myFile = 'image2.jpeg'
        cy.get('.drop-image').attachFile(myFile)
        cy.get('#submit-btn').click( { force: true } )
    })

})
