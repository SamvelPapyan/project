var side = 80;
var matrix = [
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,1,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0]
];
var grassArr = [];
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
		}
	}
	console.log(grassArr);
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
		}
	}
	
	for(var i in grassArr){
		grassArr[i].bazmanal();
		console.log(grassArr);
	}
}