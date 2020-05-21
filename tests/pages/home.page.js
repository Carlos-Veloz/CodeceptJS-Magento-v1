const I = actor();

module.exports = {
    goto() {
        I.amOnPage('http://34.221.169.243/')
    },

    enterSearch(item) {
        I.fillField('q', item)
        I.pressKey('Enter')
    },

    resultsSearch() {
        I.see('SEARCH RESULTS')
    }
}