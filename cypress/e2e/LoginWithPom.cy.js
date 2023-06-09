 //using pom
import login from "../PageObjects/LoginPage"
let testdata

describe('Login', function () {
    it('Verify that the user is able to login with valid credentials', function () {
        cy.visit("https://alpha.discoverrr.com/login")
        cy.fixture('testdata').then(function(data){
         const ln=new login()
         ln.setEmail('qatesthub819@gmail.com')
         ln.setPassword('Qwerty@12345')
        ln.clickSubmit()
        ln.verifyLogin()

        
    })
})
})