let shapeXs;
let shapeYs;
let grabbeds;
let wPawn;
let ogPos;
let ogShapeX;
let ogShapeY;
let firstMove = true;
//const tileSize = 80;
const tileSize = window.screen.availHeight / 12;
const rad = tileSize/2;
const diameter = rad*2;

function preload(){
	bRook = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/50px-Chess_rdt45.svg.png');
	bKnight = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/50px-Chess_ndt45.svg.png');
	bBishop = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/50px-Chess_bdt45.svg.png');
	bQueen = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/50px-Chess_qdt45.svg.png');
	bKing = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/50px-Chess_kdt45.svg.png');
	bPawn = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/50px-Chess_pdt45.svg.png');
	
	wRook = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/50px-Chess_rlt45.svg.png');
	wKnight = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/50px-Chess_nlt45.svg.png');
	wBishop = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/50px-Chess_blt45.svg.png');
	wQueen = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/50px-Chess_qlt45.svg.png');
	wKing = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/50px-Chess_klt45.svg.png');
	wPawn = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/50px-Chess_plt45.svg.png');
}

function setup() {
  let cnv = createCanvas(tileSize*8, tileSize*8);
  //cnv.position(0, 0, 'fixed');
  cnv.parent('parent');
  //window.screen.availHeight/8
  shapeX = 0;
  shapeY = 0;
  
  shapeXs = [0, tileSize, 2*tileSize, 3*tileSize, 4*tileSize, 5*tileSize, 6*tileSize, 7*tileSize, 0, tileSize, 2*tileSize, 3*tileSize, 4*tileSize, 5*tileSize, 6*tileSize, 7*tileSize,0, tileSize, 2*tileSize, 3*tileSize, 4*tileSize, 5*tileSize, 6*tileSize, 7*tileSize, 0, tileSize, 2*tileSize, 3*tileSize, 4*tileSize, 5*tileSize, 6*tileSize, 7*tileSize];
  shapeYs = [0, 0, 0, 0, 0, 0, 0, 0, tileSize, tileSize, tileSize, tileSize, tileSize, tileSize, tileSize, tileSize, 6*tileSize, 6*tileSize, 6*tileSize, 6*tileSize, 6*tileSize, 6*tileSize, 6*tileSize, 6*tileSize, 7*tileSize, 7*tileSize, 7*tileSize, 7*tileSize, 7*tileSize, 7*tileSize, 7*tileSize, 7*tileSize];
  grabbeds = [false, false];
  //new Board();
}

function draw() {
  for (var i = 0; i < 8; i++){
	for (var j = 0; j < 8; j++){
		if ((i + j) % 2 == 1) {
			fill(230, 225, 220);
		} else {
			fill(135, 70, 50);
		}
		strokeWeight(0);
		rect(i* tileSize, j * tileSize, tileSize, tileSize);
	}
  }
  let bRook0 = image(bRook, shapeXs[0], shapeYs[0], tileSize, tileSize);
  let bKnight0 = image(bKnight, shapeXs[1], shapeYs[1], tileSize, tileSize);
  let bBishop0 = image(bBishop, shapeXs[2], shapeYs[2], tileSize, tileSize);
  let bQueen0 = image(bQueen, shapeXs[3], shapeYs[3], tileSize, tileSize);
  let bKing0 = image(bKing, shapeXs[4], shapeYs[4], tileSize, tileSize);
  let bBishop1 = image(bBishop, shapeXs[5], shapeYs[5], tileSize, tileSize);
  let bKnight1 = image(bKnight, shapeXs[6], shapeYs[6], tileSize, tileSize);
  let bRook1 = image(bRook, shapeXs[7], shapeYs[7], tileSize, tileSize);
  let bPawn0 = image(bPawn, shapeXs[8], shapeYs[8], tileSize, tileSize);
  let bPawn1 = image(bPawn, shapeXs[9], shapeYs[9], tileSize, tileSize);
  let bPawn2 = image(bPawn, shapeXs[10], shapeYs[10], tileSize, tileSize);
  let bPawn3 = image(bPawn, shapeXs[11], shapeYs[11], tileSize, tileSize);
  let bPawn4 = image(bPawn, shapeXs[12], shapeYs[12], tileSize, tileSize);
  let bPawn5 = image(bPawn, shapeXs[13], shapeYs[13], tileSize, tileSize);
  let bPawn6 = image(bPawn, shapeXs[14], shapeYs[14], tileSize, tileSize);
  let bPawn7 = image(bPawn, shapeXs[15], shapeYs[15], tileSize, tileSize);
  
  let wPawn0 = image(wPawn, shapeXs[16], shapeYs[16], tileSize, tileSize);
  let wPawn1 = image(wPawn, shapeXs[17], shapeYs[17], tileSize, tileSize);
  let wPawn2 = image(wPawn, shapeXs[18], shapeYs[18], tileSize, tileSize);
  let wPawn3 = image(wPawn, shapeXs[19], shapeYs[19], tileSize, tileSize);
  let wPawn4 = image(wPawn, shapeXs[20], shapeYs[20], tileSize, tileSize);
  let wPawn5 = image(wPawn, shapeXs[21], shapeYs[21], tileSize, tileSize);
  let wPawn6 = image(wPawn, shapeXs[22], shapeYs[22], tileSize, tileSize);
  let wPawn7 = image(wPawn, shapeXs[23], shapeYs[23], tileSize, tileSize);
  let wRook0 = image(wRook, shapeXs[24], shapeYs[24], tileSize, tileSize);
  let wKnight0 = image(wKnight, shapeXs[25], shapeYs[25], tileSize, tileSize);
  let wBishop0 = image(wBishop, shapeXs[26], shapeYs[26], tileSize, tileSize);
  let wQueen0 = image(wQueen, shapeXs[27], shapeYs[27], tileSize, tileSize);
  let wKing0 = image(wKing, shapeXs[28], shapeYs[28], tileSize, tileSize);
  let wBishop1 = image(wBishop, shapeXs[29], shapeYs[29], tileSize, tileSize);
  let wKnight1 = image(wKnight, shapeXs[30], shapeYs[30], tileSize, tileSize);
  let wRook1 = image(wRook, shapeXs[31], shapeYs[31], tileSize, tileSize);
  //image(img, 50, 0, 40, 20, 50, 50, 50, 50);
  //ellipse(shapeX, shapeY, diameter, diameter);
}

function mousePressed () {
	let d = [];
	for (let i = 0; i < shapeXs.length; i++){
		d.push(dist(mouseX, mouseY, (shapeXs[i] + tileSize/2), (shapeYs[i] + tileSize/2))); 
	}
	
	for (let i = 0; i < d.length; i++){
		if (d[i] < rad) {
			ogShapeX = shapeXs[i];
			ogShapeY = shapeYs[i];
			grabbeds[i] = true;
			ogPos = 0;
			ogPos = Math.floor(shapeXs[i]/tileSize) + (Math.floor(shapeYs[i]/tileSize) * 8)
		} else {
			grabbeds[i] = false;
		}
	}
}

function mouseDragged() {
	for (let i = 0; i < grabbeds.length; i++){
		if(grabbeds[i]){
			shapeXs[i] = mouseX - tileSize/2;
			shapeYs[i] = mouseY - tileSize/2;
		}
	}
}

function mouseReleased() {
	let sd = 0;
	//console.log(63/8);
	//console.log(63%8);
	let fM = 0;
	if (firstMove == true){
		fM = 1;
		firstMove = false;
	}
	
	let newX = (Math.floor(mouseX / tileSize) * tileSize);
	let newY = (Math.floor(mouseY / tileSize) * tileSize);
	
	for (let i = 0; i < grabbeds.length; i++){
		if (grabbeds[i] == true){
			sd = sd + Math.floor(newX/tileSize) + (Math.floor(newY/tileSize) * 8);
			//console.log(sd);
			
			let nums = ("" + ogPos + " " + sd + " " + fM + "");
			console.log(nums);
			restCall1(nums);
			
			shapeXs[i] = (Math.floor(mouseX / tileSize) * tileSize) + 0;
			shapeYs[i] = (Math.floor(mouseY / tileSize) * tileSize) + 0;
			grabbeds[0] = false;
			//console.log("hell yeah " + ogPos + ", " + sd);
			//console.log("hell no " + Math.floor(shapeXs[i]/100) + ", " + (8 * Math.floor(shapeYs[i]/100)));
		}
	}
}

function restCall1(numbers){
	let httpRequest=new XMLHttpRequest();
	httpRequest.open("GET", 'http://localhost:8080/api/m1?numbers=' + numbers);
	httpRequest.send();
	httpRequest.onload=function(){
		let rT = httpRequest.responseText;
		let arr = rT.split(" ");
		console.log(arr);
		//console.log(arr[2] / 8 + " " + arr[2] % 8);
		console.log(Math.floor(arr[2] / 8) * tileSize + " " + Math.floor(arr[2] % 8) * tileSize);
		for (let i = 0; i < shapeXs.length; i++){
			if ((shapeXs[i] === (Math.floor(arr[1] % 8) * tileSize)) && (shapeYs[i] === (Math.floor(arr[1] / 8) * tileSize))){
				//console.log("ttt" + Math.floor(arr[1] / 8) * 100 + " " + Math.floor(arr[1] % 8) * 100);
				//console.log(shapeXs[i] + ", " + shapeYs[i]);
				shapeXs[i] = Math.floor(arr[2] % 8) * tileSize;
				shapeYs[i] = Math.floor(arr[2] / 8) * tileSize;
			}
		}
	}
	//console.log('inside the .js file');
	//fetch('http://localhost:8080/api/m1/allow-cors', {mode:'cors'});
}