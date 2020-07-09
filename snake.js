function Snake(width, height) {
  this.width = width;
  this.height = height;
  this.body = [];
  this.change = false;
  this.body.push(createVector(this.width / 4, this.height / 2));
  this.dir = function (x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  };

  this.update = function () {
    if (this.change == true) {
      this.grow(
        this.body[this.body.length - 1].x - this.xSpeed * scl,
        this.body[this.body.length - 1].y - this.ySpeed * scl
      );
      this.change = false;
    }
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    if (
      this.body[0].x !== this.width &&
      this.body[0].y !== this.height &&
      (this.body[0].x !== 0 || this.xSpeed !== -1) &&
      (this.body[0].y !== 0 || this.ySpeed !== -1)
    ) {
      this.body[0].x = this.body[0].x + this.xSpeed * scl;
      this.body[0].y = this.body[0].y + this.ySpeed * scl;
    } else if (this.body[0].x === width) {
      this.body[0].x = 0;
      this.body[0].y = this.body[0].y + this.ySpeed * scl;
    } else if (this.body[0].y === height) {
      this.body[0].x = this.body[0].x + this.xSpeed * scl;
      this.body[0].y = 0;
    } else if (this.body[0].x === 0 && this.xSpeed === -1) {
      this.body[0].x = width - 20;
      this.body[0].y = this.body[0].y + this.ySpeed * scl;
    } else if (this.body[0].y === 0 && this.ySpeed === -1) {
      this.body[0].x = this.body[0].x + this.xSpeed * scl;
      this.body[0].y = height - 20;
    }
  };

  this.show = function () {
    fill(58, 207, 58);
    for (let i = 1; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, scl, scl);
    }
    fill(34, 139, 34);
    rect(this.body[0].x, this.body[0].y, scl, scl);
  };

  this.eat = function (pos) {
    let d = dist(this.body[0].x, this.body[0].y, pos.x, pos.y);
    if (d < 1) {
      this.change = true;
      return true;
    } else {
      return false;
    }
  };

  this.grow = function (x, y) {
    this.body.push(createVector(x, y));
  };

  this.isNotDead = function (x, y) {
    for (let i = 2; i < this.body.length; i++) {
      if (x === this.body[i].x && y === this.body[i].y) {
        return false;
      }
    }
    return true;
  };

  this.reset = function () {
    this.body = [];
    this.body.push(createVector(this.width / 4, this.height / 2));
    this.dir(0, 0);
  };
}
