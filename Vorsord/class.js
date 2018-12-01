class Grass{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.multiply = 0;
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
			matrix[nory][norx] = 1;
			this.stanalNorKordinatner();
			
			var norXot = new Grass(norx,nory);
			grassArr.push(norXot);
			this.multiply = 0;
		}
	}
}

class Xotaker {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.c = 0;

	}

	stanalNorKordinatner() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	yntrelVandak(ch) {
		this.stanalNorKordinatner();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}


		}
		return found;
	}


	sharjvel() {

		var norVandak = random(this.yntrelVandak(0));
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 2;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.energy--;
		}
		else {
			//this.utel();
		}
		if (this.energy == 0) {
			//this.mernel();
		}
	}
	utel() {
		var norVandak = random(this.yntrelVandak(1));
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			for (var i in grassArr) {
				var xotObj = grassArr[i];
				if (xotObj.x == norx && xotObj.y == nory) {
					grassArr.splice(i, 1);
				}
			}
			matrix[nory][norx] = 2;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.c++
			this.energy = 5;

		}
		else {
			this.sharjvel()
		}
		if (this.energy <= 0) {
			this.mernel();
		}
		if (this.c >= 10) {
			this.bazmanal();
		}
	}
	mernel() {
		matrix[this.y][this.x] = 0;
		for (var i in xotakerArr) {
			var xotObj = xotakerArr[i];
			if (xotObj.x == this.x && xotObj.y == this.y) {
				xotakerArr.splice(i, 1);
			}
		}
	}
	bazmanal() {
		var datarkVandakner = this.yntrelVandak(0);
		var norVandak = random(datarkVandakner);
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 2;

			var norXt = new Xotaker(norx, nory);
			xotakerner.push(norXt);
			this.c = 0;
		}
	}
}

class Gishatich {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	yntrelVandak(ch) {
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}


		}
		return found;
	}
	stanalNorKordinatner() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}

	sharjvel() {
		this.stanalNorKordinatner();
		var norVandak = random(this.yntrelVandak(0));
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 3;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.energy--;
		}

	}
	utel() {
		this.stanalNorKordinatner();
		var norVandak = random(this.yntrelVandak(2));
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			for (var i in xotakerArr) {
				var xotObj = xotakerArr[i];
				if (xotObj.x == this.x && xotObj.y == this.y) {
					xotakerArr.splice(i, 1);
				}
			}
			matrix[nory][norx] = 3;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.energy = 5;

		}
		else {
			this.sharjvel()
		}
		if (this.energy == 0) {
			this.mernel();
		}
	}
	mernel() {
		matrix[this.y][this.x] = 0;
		for (var i in gishatichArr) {
			var xotObj = gishatichArr[i];
			if (xotObj.x == this.x && xotObj.y == this.y) {
				gishatichArr.splice(i, 1);
			}
		}
	}
}

class Bomb{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	stanalNorKordinatner(){
		this.directions = [
			[this.x - 2,this.y - 2],
			[this.x - 1,this.y - 2],
			[this.x    ,this.y - 2],
			[this.x + 1,this.y - 2],
			[this.x + 2,this.y - 2],
			[this.x - 2,this.y - 1],
			[this.x + 2,this.y - 1],
			[this.x - 2,this.y    ],
			[this.x + 2,this.y    ],
			[this.x - 2,this.y + 1],
			[this.x + 2,this.y + 1],
			[this.x - 2,this.y + 2],
			[this.x - 1,this.y + 2],
			[this.x    ,this.y + 2],
			[this.x + 1,this.y + 2],
			[this.x + 2,this.y + 2],
			[this.x - 1,this.y - 1],
			[this.x    ,this.y - 1],
			[this.x + 1,this.y - 1],
			[this.x - 1,this.y    ],
			[this.x    ,this.y    ],
			[this.x + 1,this.y    ],
			[this.x - 1,this.y + 1],
			[this.x    ,this.y + 1],
			[this.x + 1,this.y + 1]
		];
	}
	stanalPoqrKordinatner(){
		this.dirs = [
			[this.x - 1, this.y - 1],
			[this.x    , this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y    ],
			[this.x + 1, this.y    ],
			[this.x - 1, this.y + 1],
			[this.x    , this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	yntrelVandak(ch) {
		var found = [];
		this.stanalPoqrKordinatner();
		for (var i in this.dirs) {
			var x = this.dirs[i][0];
			var y = this.dirs[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.dirs[i]);
				}
			}
		}
		return found;
	}
	nstel(){
		this.stanalPoqrKordinatner();
		for(var i in this.dirs){
			var x = this.dirs[i][0];
			var y = this.dirs[i][1];
			if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
				if(matrix[y][x] != 0){
					this.paytel();
				}
			}
		}
	}
	paytel(){
			this.stanalNorKordinatner();
			for(var i in this.directions){
				var x = this.directions[i][0];
				var y = this.directions[i][1];
				if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
					for(var i in grassArr){
						var xotObj = grassArr[i];
						if(matrix[y][x] == 1){
							grassArr.splice(i,1);
						}
					}
					for(var i in xotakerArr){
						var xotObj = xotakerArr[i];
						if(matrix[y][x] == 2){
							xotakerArr.splice(i,1);
						}
					}
					for(var i in gishatichArr){
						var xotObj = gishatichArr[i];
						if(matrix[y][x] == 3){
							gishatichArr.splice(i,1);
						}
					}
					matrix[y][x] = 0;
					this.mernel();
				}
			}
		}
	mernel(){
		matrix[this.y][this.x] = 0;
		for(var i in bombArr){
			var bmObj = bombArr[i];
			if(bmObj.x == this.x && bmObj.x == this.y){
				bombArr.splice(i,1);
			}
		}
	}	
}

class Vorsord {
	constructor(n, m) {
		this.x = n;
		this.y = m;
		this.energy = 10;
		this.c = 0;

	}
	stanalNorKordinatner() {
		this.directions = [
			[this.x - 2, this.y - 2],
			[this.x - 1, this.y - 2],
			[this.x, this.y - 2],
			[this.x + 1, this.y - 2],
			[this.x + 2, this.y - 2],
			[this.x - 2, this.y - 1],
			[this.x + 2, this.y - 1],
			[this.x - 2, this.y],
			[this.x + 2, this.y],
			[this.x - 2, this.y + 1],
			[this.x + 2, this.y + 1],
			[this.x - 2, this.y + 2],
			[this.x - 1, this.y + 2],
			[this.x, this.y + 2],
			[this.x + 1, this.y + 2],
			[this.x + 2, this.y + 2]
		];
	}
	yntrelVandak(ch) {
		this.stanalNorKordinatner();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	sharjvel() {
		var norVandak = random(this.yntrelVandak(0));
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 5;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.energy--;
		}
		else {
			//this.utel();
		}
		if (this.energy == 0) {
			//this.mernel();
		}
	}
	spanel() {
		var norVandak = random(this.yntrelVandak(3));
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			for (var i in gishatichArr) {
				var xotObj = gishatichArr[i];
				if (xotObj.x == norx && xotObj.y == nory) {
					gishatichArr.splice(i, 1);
				}
			}
			matrix[nory][norx] = 5;
			matrix[this.y][this.x] = 0;
			this.y = nory;
			this.x = norx;
			this.c++
			this.energy = 10;

		}
		else {
			this.sharjvel()
		}
		if (this.energy <= 0) {
			this.mernel();
		}
		if (this.c >= 10) {
			this.bazmanal();
		}
	}
	mernel() {
		matrix[this.y][this.x] = 0;
		for (var i in vorsordArr) {
			var xotObj = vorsordArr[i];
			if (xotObj.x == this.x && xotObj.y == this.y) {
				vorsordArr.splice(i, 1);
			}
		}
	}
}