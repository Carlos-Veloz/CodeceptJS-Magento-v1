const I = actor();

module.exports = {
    fields: {
        welcome: 'p.welcome-msg',
        account: 'ACCOUNT',
        logOut: 'Log Out'
    },

    validateWelcomeMsg() {
        I.seeElement(this.fields.welcome)
    },

    logOut() {
        I.click(this.fields.account)
        I.click(this.fields.logOut)
    },

    clickLogo(){
        I.click('a.logo')
    }
}