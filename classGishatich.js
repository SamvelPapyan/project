class Gishatich {
	constructor(n, m) {
		this.x = n;
		this.y = m;
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