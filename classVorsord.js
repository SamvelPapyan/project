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
    bazmanal() {
		var datarkVandakner = this.yntrelVandak(0);
		var norVandak = random(datarkVandakner);
		if (norVandak) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			matrix[nory][norx] = 2;

			var norVs = new Vorsord(norx, nory);
			vorsordArr.push(norVs);
			this.c = 0;
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