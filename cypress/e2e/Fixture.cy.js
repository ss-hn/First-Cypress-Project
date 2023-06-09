
describe('Signup Suite', () => {
  let testdata
  before(() => {
    cy.fixture('testdata').then(function (data) {
      testdata = data

    })
})

  it('Verify that user is able to successfully sign up-Possitive test case', function () {
    cy.visit('https://alpha.discoverrr.com/')
    cy.get("button[tabindex='0']").click()
    cy.get('input[id="fname"]').type('Mark')
    cy.get('#lname').type('John')
    cy.get('#email').type('weryut@gmail.com')
    cy.get('.MuiFormControl-root.css-13sljp9').click()
    cy.get("img[src='https://flagcdn.com/24x18/pk.png']").click()
    cy.get('input[id="phone-number"]').type('7098789878987')
    cy.get('input[id="password"]').type(testdata.password)
    cy.get('a > .MuiButtonBase-root').click()
    // cy.get('.button-wrapper').click()

  })

  it('Verify that the user is not able to login with valid email and invalid password-Negative test case', function () {
    cy.visit("https://alpha.discoverrr.com/login")
    cy.get('#email').type(testdata.email)
    cy.get('#password').type('Qwerty@123')
    cy.get('.form-input-control > .MuiButtonBase-root').click()
    cy.reload()
  })

  it('Verify that the user is not able to login with invalid email and valid password', function () {
    cy.visit("https://alpha.discoverrr.com/login")
    cy.get('#email').type('uyuyu@gmail.com')
    cy.get('#password').type(testdata.password)
    cy.get('.form-input-control > .MuiButtonBase-root').click()
    cy.reload()
  })

  it('Verify that the user is able to login with valid credentials', function () {
    cy.visit("https://alpha.discoverrr.com/login")
    cy.get('#email').type(testdata.email)
    cy.get('#password').type(testdata.password)
    cy.get('.form-input-control > .MuiButtonBase-root').click()
  })
})
