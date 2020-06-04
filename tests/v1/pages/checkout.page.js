const I = actor();

module.exports = {
    fields: {
        header: 'CHECKOUT',
        continue: 'CONTINUE',
        stripe: 'Pay by Card (Stripe)',
        savedCard: 'payment[cc_saved]',
        place: 'PLACE ORDER'
    },

    validateHeader() {
        I.see(this.fields.header)
    },

    checkoutProcess() {
        this.validateHeader()
        I.click(this.fields.continue)
        //after this it jumps into step 3 Shipping method
        I.waitForText('Flat Rate')
        I.click(this.fields.continue)
        //step 4 payment information
        I.checkOption(this.fields.stripe)
        I.checkOption(this.fields.savedCard)
        I.click(this.fields.continue)
        I.click(this.fields.place)
    }

}