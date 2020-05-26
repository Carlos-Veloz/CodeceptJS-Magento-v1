Feature('Checkout')

Before(async (SignIn) => {
    SignIn.goto()
})

Scenario('Purchase Items', async(I, SignIn, Index, HomePage) => {
    I.say('Given I am on logIn page')
    SignIn.enterCredentials('test@test.com', '1234567')
    Index.clickLogo()
    HomePage.seeAccountWrapper()
})