class Bomb {
	constructor(n, m) {
		this.x = n;
		this.y = m;
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
			[this.x + 2, this.y + 2],
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	stanalPoqrKordinatner() {
		this.dirs = [
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
	nstel() {
		this.stanalPoqrKordinatner();
		for (var i in this.dirs) {
			var x = this.dirs[i][0];
			var y = this.dirs[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] != 0) {
					this.paytel();
				}
			}
		}
	}
	paytel() {
		this.stanalNorKordinatner();
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == 1) {
					for (var i in grassArr) {
						var xotObj = grassArr[i];
						if (xotObj.x == x && xotObj.y == y) {
							grassArr.splice(i, 1);

						}
					}
				}
				if (matrix[y][x] == 2) {
					for (var i in xotakerArr) {
						var xotObj = xotakerArr[i];
						if(xotObj.x == x && xotObj.y == y){
							xotakerArr.splice(i, 1);
						}
					}
				}
				if (matrix[y][x] == 3) {
					for (var i in gishatichArr) {
						var xotObj = gishatichArr[i];
						if(xotObj.x == x && xotObj.y == y){
							gishatichArr.splice(i, 1);
						}
					}
				}
				if (matrix[y][x] == 4) {
					for (var i in bombArr) {
						var xotObj = bombArr[i];
						if(xotObj.x == x && xotObj.y == y){
							bombArr.splice(i, 1);
						}
					}
				}
				if (matrix[y][x] == 5) {
					for (var i in vorsordArr) {
						var xotObj = vorsordArr[i];
						if(xotObj.x == x && xotObj.y == y){
							vorsordArr.splice(i, 1);
						}
					}
				}
				matrix[y][x] = 0;

			}
		}
		this.mernel();
	}
	mernel() {
		matrix[this.y][this.x] = 0;
		for (var i in bombArr) {
			var bmObj = bombArr[i];
			if (bmObj.x == this.x && bmObj.x == this.y) {
				bombArr.splice(i, 1);
			}
		}
	}
}