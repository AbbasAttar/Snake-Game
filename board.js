let snake;
function setup() {
  createCanvas(800, 600);
  snake = new Snake();
}

function draw() {
  background(51);
  snake.update();
  snake.show();
}
