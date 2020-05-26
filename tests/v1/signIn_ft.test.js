Feature('Sign In')

Before(async (SignIn) => {
    SignIn.goto()
})

Scenario('Create an account', async(I, SignIn, Index) => {
    I.say('Given I am on login')
    SignIn.validateHeader()
    I.say('And I click on create an account')
    SignIn.createAccount()
    I.say('When I fill my information')
    SignIn.fillFields()
    I.say('And I click Register')
    SignIn.register()
    I.say('Then I get logged in')
    Index.validateWelcomeMsg()
    Index.logOut()
})