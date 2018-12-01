var side = 80;
var matrix = [
	[1,0,3,0,1],
	[0,2,0,2,0],
	[0,0,3,0,0],
	[0,2,0,2,0],
	[1,0,3,0,1]
];
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
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
		}
	}
	
	for(var i in grassArr){
		grassArr[i].bazmanal();
		console.log(grassArr);
	}
	for(var i in xotakerArr){
		xotakerArr[i].utel();
	}
	for(var i in gishatichArr){
		gishatichArr[i].utel();
	}
}