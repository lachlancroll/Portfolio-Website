class Board {
  constructor() {
    this.whitePieces = [];
    this.blackPieces = [];
    this.score = 0;
    this.setupPieces();
  }
  
  setupPieces(){
	this.whitePieces.push(new Piece(4, 7, true));
	
  }