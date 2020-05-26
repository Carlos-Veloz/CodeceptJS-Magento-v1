const I = actor();

module.exports = {
    validateWelcomeMsg() {
        I.seeElement('p.welcome-msg')
    },

    logOut() {
        I.click('ACCOUNT')
        I.click('Log Out')
    }
}