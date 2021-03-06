module.exports = createTest

var assert = require('assert')

function createTest (linter, fixturesPath) {

  describe('clock', function () {

    before(function () {
      linter.configure({ preset: 'clock' })

      assert.equal(linter.getConfiguredRules().length > 0, true)
    })

    it('should report errors found in file', function () {
      var result = linter.checkFile(fixturesPath + 'clock--invalid.jade')

      assert.equal(result.length, 3)
    })

    it('should not report errors in valid file', function () {
      var result = linter.checkFile(fixturesPath + 'clock--valid.jade')

      assert.equal(result.length, 0)
    })

  })

}
