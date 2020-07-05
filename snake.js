function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.update = function () {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  };

  this.show = function () {
    fill(136, 202, 94);
    rect(this.x, this.y, 20, 20);
  };
}
