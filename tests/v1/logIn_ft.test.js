Feature('Log In')

Before(async (HomePage) => {
    HomePage.goto()
})

Scenario('Log In', async(I, HomePage, SignIn, Index) => {
    I.say('Given I am on home')
    I.say('And I click Log In')
    HomePage.clickLogin()
    I.say('When I enter my credentials')
    SignIn.enterCredentials('test@test.com', '1234567')
    I.say('Then I get the Dahsboard page')
    Index.validateWelcomeMsg()
    I.say('And I click Log Out')
    Index.logOut()
}),

Scenario('Record latest order', async(I, HomePage, SignIn, Index) => {
    I.say('Given I am on home')
    I.say('And I click Log In')
    HomePage.clickLogin()
    I.say('When I enter my credentials')
    SignIn.enterCredentials('test@test.com', '1234567')
    I.say('Then I get the Dahsboard page')
    I.say('And I record the latest purchase')
    Index.recordOrder()
})
