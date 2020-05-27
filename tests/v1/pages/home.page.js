const I = actor();

module.exports = {
    fields: {
        welcome: 'p.welcome-msg',
        wrapper: 'div.account-cart-wrapper',
        account: 'ACCOUNT'
    },
    
    goto() {
        I.amOnPage('/') //v1
    },

    seeAccountWrapper() {
        I.seeElement(this.fields.wrapper)
    },

    validateAccountOptions() {
        I.click(this.fields.account)
        I.see('My Account')
        I.see('My Wishlist')
        I.see('My Cart')
        I.see('Checkout')
        I.see('Register')
    },

    clickLogin() {
        I.click(this.fields.account)
        I.click('Log In')
    }
    
}