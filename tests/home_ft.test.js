Feature('Home Magento')

Before(async (I, HomePage) => {
    HomePage.goto()
})

Scenario('Validate I am on home page', async (I, HomePage) => {
    I.say('Given I am on home')
    I.say('When I search an "item"')
    HomePage.enterSearch('item')
    I.say('Then I see the results')
    HomePage.resultsSearch()
})
