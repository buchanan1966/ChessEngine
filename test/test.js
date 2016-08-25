var assert = require('assert')
var engine = require('../src/engine.js')

describe('Chess Engine', function() {
  describe('Game()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    })
    it('should get a new game from engine', function(){
      assert(engine)
      var game = engine.new()
      assert.equal(engine.pieces.length, 32)
    })
    it('should parse move e4', function(){
      var game = engine.new()
      var parsedMove = engine.parseMove('e4')
      assert.equal(parsedMove.to.x, 4)
      assert.equal(parsedMove.to.y, 3)
      assert.equal(parsedMove.pieceType, 'Pawn')
    })
  })
})
