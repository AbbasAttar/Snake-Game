function Snake() {
  this.x = 0;
  this.y = 0;
  this.sLength = 0;
  this.body = [];
  this.dir = function (x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  };

  this.update = function () {
    if (this.sLength - 1 === this.body.length) {
      for (let i = 0; i < this.body.length; i++) {
        this.body[i] = this.body[i + 1];
      }
    }

    this.body[this.sLength - 1] = createVector(this.x, this.y);
    console.log(this.body[this.sLength - 1]);

    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.show = function () {
    console.log(this.sLength);

    fill(136, 202, 94);
    for (let i = 0; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  };

  this.eat = function (pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.sLength++;
      this.grow(pos);
      return true;
    } else {
      return false;
    }
  };

  this.grow = function (pos) {};
}
