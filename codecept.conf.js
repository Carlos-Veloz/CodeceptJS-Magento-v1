const path = require('path')

const TestBaseDirectory = 'tests'

exports.config = {
  name: 'codeceptjs-magento',
  tests: path.join('.', TestBaseDirectory, '**', '*.test.js'), // Look for tests in all subfolders
  output: './output',
  helpers: {
    TestCafe: {
      url: 'http://localhost',
      browser: 'chrome',
      show: true
    }
  },
  include: {
    HomePage: `./${TestBaseDirectory}/pages/home.page.js`,
  },
  bootstrap: null,
  mocha: {},
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}