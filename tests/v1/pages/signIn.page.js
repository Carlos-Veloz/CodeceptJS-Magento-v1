const I = actor();

module.exports = {
    fields: {
        header: 'LOGIN OR CREATE AN ACCOUNT',
        createAccount: 'CREATE AN ACCOUNT',
        firstname: 'firstname',
        lastname: 'lastname',
        email: 'email',
        password: 'password',
        confirmation: 'confirmation',
        
        username: 'login[username]',
        pwd: 'login[password]',

        register: 'REGISTER',
        login: 'LOGIN'
    },

    goto() {
        I.amOnPage('/customer/account/login/')
    },

    validateHeader() {
        I.see(this.fields.header)
    },

    createAccount() {
        I.click(this.fields.createAccount)
    },

    fillFields() {
        I.fillField(this.fields.firstname, 'Test')
        I.fillField(this.fields.lastname, 'User')
        I.fillField(this.fields.email, 'testuser@fake.com')
        I.fillField(this.fields.password, secret('1234567'))
        I.fillField(this.fields.confirmation, secret('1234567'));
    },

    register() {
        I.see(this.fields.register)
    },

    enterCredentials(user, pwd) {
        I.fillField(this.fields.username, user)
        I.fillField(this.fields.pwd, secret(pwd))
        I.click(this.fields.login)
    }
}