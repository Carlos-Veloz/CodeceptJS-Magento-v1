const I = actor();

module.exports = {
    fields: {
        header: 'YOUR ORDER HAS BEEN RECEIVED.'
    },

    validateHeader() {
        I.see(this.fields.header)
    }
    
}