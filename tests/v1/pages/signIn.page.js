const I = actor();

module.exports = {
    goto() {
        I.amOnPage('/customer/account/login/')
    },

    validateHeader() {
        I.see('LOGIN OR CREATE AN ACCOUNT')
    },

    createAccount() {
        I.click('CREATE AN ACCOUNT')
    },

    fillFields() {
        I.fillField('firstname', 'Test')
        I.fillField('lastname', 'User')
        I.fillField('email', 'testuser@fake.com')
        I.fillField('password', secret('1234567'))
        I.fillField('confirmation', secret('1234567'));
    },

    register() {
        I.click('REGISTER')
    },

    enterCredentials(user, pwd) {
        I.fillField('login[username]', user)
        I.fillField('login[password]', secret(pwd))
        I.click('LOGIN')
    }
}