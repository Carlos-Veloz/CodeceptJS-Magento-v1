const I = actor();

module.exports = {
    goto() {
        I.amOnPage('/') //v1
    },

    enterSearch(item) {
        I.fillField('q', item)
        I.pressKey('Enter')
    },

    resultsSearch() {
        I.see('1 Item(s)')
    },

    seeAccountWrapper() {
        I.see('DEFAULT WELCOME MSG!', 'p.welcome-msg')
        I.seeElement('div.account-cart-wrapper')
    },

    validateAccountOptions() {
        I.click('ACCOUNT')
        I.see('My Account')
        I.see('My Wishlist')
        I.see('My Cart')
        I.see('Checkout')
        I.see('Register')
    },

    clickLogin() {
        I.click('ACCOUNT')
        I.click('Log In')
    }
    
}