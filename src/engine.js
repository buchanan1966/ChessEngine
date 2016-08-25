var engine = {
    new: newGame,
    move: move,
    parseMove: parseMove
}

function newGame(){
  engine.pieces = [];
  engine.pieces.push(getPiece('Rook', 'white', (0,0)))
  engine.pieces.push(getPiece('Knight', 'white', (1,0)))
  engine.pieces.push(getPiece('Bishop', 'white', (2,0)))
  engine.pieces.push(getPiece('Queen', 'white', (3,0)))
  engine.pieces.push(getPiece('King', 'white', (4,0)))
  engine.pieces.push(getPiece('Bishop', 'white', (5,0)))
  engine.pieces.push(getPiece('Knight', 'white', (6,0)))
  engine.pieces.push(getPiece('Rook', 'white', (7,0)))
  engine.pieces.push(getPiece('Pawn', 'white', (0,1)))
  engine.pieces.push(getPiece('Pawn', 'white', (1,1)))
  engine.pieces.push(getPiece('Pawn', 'white', (2,1)))
  engine.pieces.push(getPiece('Pawn', 'white', (3,1)))
  engine.pieces.push(getPiece('Pawn', 'white', (4,1)))
  engine.pieces.push(getPiece('Pawn', 'white', (5,1)))
  engine.pieces.push(getPiece('Pawn', 'white', (6,1)))
  engine.pieces.push(getPiece('Pawn', 'white', (7,1)))
  engine.pieces.push(getPiece('Rook', 'white', (0,7)))
  engine.pieces.push(getPiece('Knight', 'white', (1,7)))
  engine.pieces.push(getPiece('Bishop', 'white', (2,7)))
  engine.pieces.push(getPiece('Queen', 'white', (3,7)))
  engine.pieces.push(getPiece('King', 'white', (4,7)))
  engine.pieces.push(getPiece('Bishop', 'white', (5,7)))
  engine.pieces.push(getPiece('Knight', 'white', (6,7)))
  engine.pieces.push(getPiece('Rook', 'white', (7,7)))
  engine.pieces.push(getPiece('Pawn', 'white', (0,6)))
  engine.pieces.push(getPiece('Pawn', 'white', (1,6)))
  engine.pieces.push(getPiece('Pawn', 'white', (2,6)))
  engine.pieces.push(getPiece('Pawn', 'white', (3,6)))
  engine.pieces.push(getPiece('Pawn', 'white', (4,6)))
  engine.pieces.push(getPiece('Pawn', 'white', (5,6)))
  engine.pieces.push(getPiece('Pawn', 'white', (6,6)))
  engine.pieces.push(getPiece('Pawn', 'white', (7,6)))
}

function move(moveStr){
  let parsedMove = parseMove(moveStr)
}

function parseMove(moveStr){
  console.log('Parsing move:' + moveStr)
  let parsedMove = {}
  let toStr = moveStr.slice(-2)
  let location = getLocation(toStr)
  console.log('Location string: ' + toStr)
  parsedMove.to = location
  if(moveStr.length == 2){
    parsedMove.pieceType = 'Pawn'
  }
  return parsedMove
}

function getLocation(stringLocation){
  var xChar = stringLocation.substr(0,1)
  let xCharacters =['a','b','c','d','e','f','g','h']
  let x = xCharacters.indexOf(xChar)
  var yChar = stringLocation.substr(1,1)
  var y = parseInt(yChar)-1
  return {x: x, y: y}
}

function getPiece(type, color, location){
  return {
    type: type,
    color: color,
    location: location
  }
}


module.exports = engine;
