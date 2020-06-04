const path = require('path')

const TestBaseDirectory = 'tests'

exports.config = {
  name: 'codeceptjs-magento',
  tests: path.join('.', TestBaseDirectory, '**', '*.test.js'), // Look for tests in all subfolders
  output: './output',
  helpers: {
    TestCafe: {
      url: 'http://34.221.169.243',
      browser: 'chrome',
      show: true
    }
  },
  include: {
    HomePage: `./${TestBaseDirectory}/v1/pages/home.page.js`,
    SignIn: `./${TestBaseDirectory}/v1/pages/signIn.page.js`,
    Index: `./${TestBaseDirectory}/v1/pages/index.page.js`,
    Cart: `./${TestBaseDirectory}/v1/pages/cart.page.js`,
    Checkout: `./${TestBaseDirectory}/v1/pages/checkout.page.js`,
    Success: `./${TestBaseDirectory}/v1/pages/success.page.js`
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: false
    }
  }
}