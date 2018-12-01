var nQanak = 80;
var mQanak = 80;
var side = 10;
var matrix = [];
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var bombArr = [];
var vorsordArr = [];

var xotQanak = 4000;
var xotakerQanak = 900;
var bombQanak = 300;
var gishQanak = 1000;
var vorsQanak = 200;

function setup() {
	createCanvas(nQanak * side, mQanak * side);
	background('#acacac');
	frameRate(10);
	for (var m = 0; m < mQanak; m++) {
		matrix[m] = [];
		for (var n = 0; n < nQanak; n++) {
			matrix[m][n] = 0 /*Math.round(random(0,5))*/;
		}
	}
	
	while (xotQanak > 0) {
		var x = Math.floor(Math.random() * nQanak);
		var y = Math.floor(Math.random() * mQanak);

		matrix[y][x] = 1;
		xotQanak--;
	}
	while (xotakerQanak > 0) {
		var x = Math.floor(Math.random() * nQanak);
		var y = Math.floor(Math.random() * mQanak);
		if(matrix[y][x] == 0){
			matrix[y][x] = 2;
			xotakerQanak--;
		}
		
	}
	
	while (bombQanak > 0) {
		var x = Math.floor(Math.random() * nQanak);
		var y = Math.floor(Math.random() * mQanak);
		if(matrix[y][x] == 0){
			matrix[y][x] = 4;
			bombQanak--;
		}
		
	}
	while (gishQanak > 0) {
		var x = Math.floor(Math.random() * nQanak);
		var y = Math.floor(Math.random() * mQanak);
		if(matrix[y][x] == 0){
			matrix[y][x] = 3;
			gishQanak--;
		}
		
	}
	while(vorsQanak > 0) {
		var x = Math.floor(Math.random() * nQanak);
		var y = Math.floor(Math.random() * mQanak);
		if(matrix[y][x] == 0){
			matrix[y][x] = 5;
			vorsQanak--;
		}
	}
	
	for (var m = 0; m < mQanak; m++) {
		for (var n = 0; n < nQanak; n++) {
			if (matrix[m][n] == 1) {
				var gr = new Grass(n, m);
				grassArr.push(gr);
			}
			else if (matrix[m][n] == 2) {
				var xt = new Xotaker(n, m);
				xotakerArr.push(xt);
			}
			else if (matrix[m][n] == 3) {
				var gs = new Gishatich(n, m);
				gishatichArr.push(gs);
			}
			else if (matrix[m][n] == 4) {
				var bm = new Bomb(n, m);
				bombArr.push(bm);
			}
			else if (matrix[m][n] == 5) {
				var vor = new Vorsord(n, m);
				vorsordArr.push(vor);
			}
		}
	}
}

function draw() {
	for (var m = 0; m < mQanak; m++) {
		for (var n = 0; n < nQanak; n++) {
			if (matrix[m][n] == 1) {
				fill('green');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 0) {
				fill('#acacac');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 2) {
				fill('yellow');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 3) {
				fill('orange');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 4) {
				fill('red');
				rect(n * side, m * side, side, side);
			}
			else if (matrix[m][n] == 5) {
				fill(0, 0, 200);
				rect(n * side, m * side, side, side);
			}
		}
	}

	for (var i in grassArr) {
		grassArr[i].bazmanal();
	}
	for (var i in xotakerArr) {
		xotakerArr[i].utel();
	}
	for (var i in gishatichArr) {
		gishatichArr[i].utel();
	}
	for (var i in bombArr) {
		bombArr[i].nstel();
	}
	for (var i in vorsordArr) {
		vorsordArr[i].spanel();
	}
}