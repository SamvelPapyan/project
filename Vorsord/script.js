var side = 80;
/*
var matrix = [
	[0,0,0,0,0,0,0,0,0,0,1,0,0,0],
	[0,0,0,0,1,0,2,0,0,1,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,3,0,0,2,3,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,4,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
*/
var matrix = [
	[3,0,3,0,3],
	[0,0,0,0,0],
	[3,0,5,0,3],
	[0,0,0,0,0],
	[3,0,3,0,3]
];
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var bombArr = [];
var vorsordArr = [];
function setup(){
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');
	frameRate(5);
	for(var y = 0; y < matrix.length;y++){
		for(var x = 0; x < matrix[y].length;x++){
			if(matrix[y][x] == 1){
				var gr = new Grass(x,y);
				grassArr.push(gr);
			}
			else if(matrix[y][x] == 2){
				var xt = new Xotaker(x,y);
				xotakerArr.push(xt);
			}
			else if(matrix[y][x] == 3){
				var gs = new Gishatich(x,y);
				gishatichArr.push(gs);
			}
			else if(matrix[y][x] == 4){
				var bm = new Bomb(x,y);
				bombArr.push(bm);
			}
			else if(matrix[y][x] == 5){
				var vor = new Vorsord(x,y);
				vorsordArr.push(vor);
			}
		}
	}
	console.log(grassArr);
	console.log(xotakerArr);
}

function draw(){
	for(var y = 0; y < matrix.length; y++){
		for(var x = 0; x < matrix[y].length; x++){
			if(matrix[y][x] == 1){
				fill('green');
				rect(x * side, y * side, side, side);
			}
			else if(matrix[y][x] == 0){
				fill('#acacac');
				rect(x * side, y * side, side, side);
			}
			else if(matrix[y][x] == 2){
                fill('yellow');
                rect(x * side, y * side, side, side);
            }
			else if(matrix[y][x] == 3){
				fill('orange');
				rect(x * side, y * side, side, side);
			}
			else if(matrix[y][x] == 4){
				fill('red');
				rect(x * side, y * side, side, side);
			}
			else if(matrix[y][x] == 5){
				fill(0,0,200);
				rect(x * side, y * side, side, side);
			}
		}
	}
	
	for(var i in grassArr){
		grassArr[i].bazmanal();
		console,log(grassArr);
	}
	for(var i in xotakerArr){
		xotakerArr[i].utel();
		console.log(xotakerArr);
	}
	for(var i in gishatichArr){
		gishatichArr[i].utel();
		console.log(gishatichArr);
	}
	for(var i in bombArr){
		bombArr[i].nstel();
		console.log(bombArr);
	}
	for(var  i in vorsordArr){
		vorsordArr[i].spanel();
	}
}