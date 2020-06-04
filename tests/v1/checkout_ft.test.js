Feature('Checkout')

Before(async (SignIn) => {
    SignIn.goto()
})

Scenario('Purchase Items', async(I, SignIn, Index, HomePage, Cart, Checkout, Success) => {
    I.say('Given I am on logIn page')
    SignIn.enterCredentials('test@test.com', '1234567')
    Index.clickLogo()
    HomePage.seeAccountWrapper()
    I.say('And I search an item')
    HomePage.searchItem('VINTAGE')
    I.say('And I add items into my cart')
    HomePage.addToCart()
    Cart.proceed()
    I.say('When I proceed to checkout')
    Checkout.checkoutProcess()
    I.say('Then I get my order number')
    Success.validateHeader()
})