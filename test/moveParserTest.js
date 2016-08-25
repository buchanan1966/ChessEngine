var assert = require('assert')
var moveParser = require('../src/moveParser.js')

describe('Move Parser', function(){
  describe('Parse Move', function(){
    it('should be true', function(){
      assert(true)
    })
    it('should return pawn to e4 when e4', function(){
      let moveStr = 'e4'
      let result = moveParser.parse(moveStr)
      assert.equal('Pawn to e4', result.description)
    })

    it('should parse move Ra1', function(){
      let moveStr = 'Ra1'
      let result = moveParser.parse(moveStr)
      assert.equal('Rook to a1', result.description)
    })
  })
})
