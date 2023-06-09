context('Signup Suite', () => {

    specify('Verify that user is able to successfully signup', function () {
        cy.visit('https://alpha.discoverrr.com/')
        cy.get('.logo-img').should('be.visible')
            .and('exist')
        //url assertions should and

        // cy.url().should('contain', 'discoverrr.com')
        // cy.url().should('include', 'alpha')
        // cy.url().should('eq', 'https://alpha.discoverrr.com/')

        // cy.url().should('contain', 'discoverrr.com')
        // .should('include', 'alpha')
        // .should('eq', 'https://alpha.discoverrr.com/')

        // cy.url().should('contain', 'discoverrr.com')
        // .and('include', 'alpha')
        // .and('eq', 'https://alpha.discoverrr.com/')

        cy.url().should('contain', 'discoverrr.com')
            .and('include', 'alpha')
            .and('not.eq', 'https://alpha.discoverrr1.com/')

        cy.title().should('eq', 'Discoverrr')
            .should('include', 'coverrr')

        cy.get("button[tabindex='0']").click()
        cy.get("button[tabindex='0']").should('have.value', '')


        cy.get('input[id="fname"]').type("Mark")
        cy.get('input[id="fname"]').should('have.value', 'Mark')

        cy.get('#lname').type('John')
        cy.get('#lname').should('have.value', 'John')

        cy.get('#email').type('qwerty@ggmail.com')
        cy.get('#email').should('have.value', 'qwerty@ggmail.com')

        cy.get('.MuiFormControl-root.css-13sljp9').click()
        cy.get('.MuiFormControl-root.css-13sljp9').should('have.value', '')

        cy.get("img[src='https://flagcdn.com/24x18/pk.png']").click()
        cy.get("img[src='https://flagcdn.com/24x18/pk.png']").should('have.value', '')

        cy.get('input[id="phone-number"]').type('7878900116644')
        cy.get('input[id="phone-number"]').should('have.value', '7878900116644')


        cy.get('input[id="password"]').type('Qwerty@12345')
        cy.get('input[id="password"]').should('have.value', 'Qwerty@12345')

        cy.get('.button-wrapper > .MuiButtonBase-root').click()
        cy.get('.button-wrapper').should('have.value', '')

    })
})