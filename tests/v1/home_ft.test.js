Feature('Home Magento')

Before(async (HomePage) => {
    HomePage.goto()
})

Scenario('Validate I am on home page', async (I, HomePage) => {
    I.say('Given I am on home')
    I.say('When I see the account wrapper')
    HomePage.seeAccountWrapper()
    I.say('Then I validate account options')
    HomePage.validateAccountOptions()
})
