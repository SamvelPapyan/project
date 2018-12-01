class Xotaker {
	constructor(n, m) {
		this.x = n;
		this.y = m;
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
			xotakerArr.push(norXt);
			this.c = 0;
		}
	}
}