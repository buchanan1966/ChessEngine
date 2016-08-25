let moveParser = {
  parse: parse
}

function parse(moveStr){
  let result = {}
  if(moveStr.length == 2){
    result.pieceType = 'Pawn'
    result.toString = moveStr
    result.moveType = 'move'
    result.description = result.pieceType + ' to ' + result.toString
  } else if(moveStr.length == 3) {
    result.toString = moveStr.slice(-2)
    result.moveType = 'move'
    result.pieceType = getPieceType(moveStr.substr(0,1))
    result.description = result.pieceType + ' to ' + result.toString
  }

  return result
}

function getPieceType(pieceAbbr){
  if(pieceAbbr == 'R'){
    return 'Rook'
  }
  if(pieceAbbr == 'N'){
    return 'Knight'
  }
  if(pieceAbbr == 'B'){
    return 'Bishop'
  }
  if(pieceAbbr == 'Q'){
    return 'Queen'
  }
  if(pieceAbbr == 'K'){
    return 'King'
  }
}

module.exports = moveParser
