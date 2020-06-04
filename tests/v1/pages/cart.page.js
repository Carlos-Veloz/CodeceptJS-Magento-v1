const I = actor();

module.exports = {
    fields: {
        header: 'SHOPPING CART',
        proceed: 'PROCEED TO CHECKOUT',
    },

    validateHeader() {
        I.see(this.fields.header)
    },

    proceed() {
        this.validateHeader()
        I.click(this.fields.proceed)
    }

}