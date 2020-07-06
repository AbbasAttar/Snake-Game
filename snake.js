function Snake() {
  this.body = [];
  this.change = false;
  this.body.push(createVector(0, 0));
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
    this.body[0].x = this.body[0].x + this.xSpeed * scl;
    this.body[0].y = this.body[0].y + this.ySpeed * scl;

    this.body[0].x = constrain(this.body[0].x, 0, width - scl);
    this.body[0].y = constrain(this.body[0].y, 0, height - scl);
  };

  this.show = function () {
    fill(136, 202, 94);
    for (let i = 1; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, scl, scl);
    }
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
}
