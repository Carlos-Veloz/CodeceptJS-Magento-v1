const I = actor();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const updateDotenv = require('update-dotenv');

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
    },

    async recordOrder() {
        let pin = await I.grabTextFrom('td.number');
        let aux = pin[0]
        updateDotenv({
            LATEST_ORDER: aux
        })
    }
}