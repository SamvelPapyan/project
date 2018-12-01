var side = 80;
var matrix = [
	[1,0,0,0,1],
	[0,0,0,0,0],
	[0,0,2,0,0],
	[0,2,0,0,0],
	[1,0,0,0,1]
];
var grassArr = [];
var xotakerArr = [];
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
			else{
				
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
}