class Grass{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.multiply = 0;
	}
	stanalNorKordinatner(){
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x    , this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y    ],
			[this.x + 1, this.y    ],
			[this.x - 1, this.y + 1],
			[this.x    , this.y + 1],
			[this.x + 1, this.y + 1],
		]
	}
	yntrelVandak(ch){
		var found = [];
		this.stanalNorKordinatner();
		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if(matrix[y][x] == ch){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	bazmanal(){
		this.multiply++;
		var datarkVandakner = this.yntrelVandak(0);
		var norVandak = random(datarkVandakner);	
		if(norVandak && this.multiply >= 8){
			var norx = norVandak[0];
			var nory = norVandak[1];
			var norXot = new Grass(norx,nory);
			grassArr.push(norXot);
			matrix[nory][norx] = 1;
			this.multiply = 0;
		}
	}
}