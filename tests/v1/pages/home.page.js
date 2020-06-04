const I = actor();

module.exports = {
    fields: {
        welcome: 'p.welcome-msg',
        wrapper: 'div.account-cart-wrapper',
        account: 'ACCOUNT',
        search: 'q',
        add: 'ADD TO CART',
        item: 'VINTAGE SHOES',
        qty: 'qty'
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
    },

    searchItem(item) {
        I.fillField(this.fields.search, item)
        I.pressKey('Enter')
        I.click(this.fields.item)
    },

    addToCart() {
        I.clearField(this.fields.qty)
        I.fillField(this.fields.qty, '2')
        I.click(this.fields.add)
    }
    
}