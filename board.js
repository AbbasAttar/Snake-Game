var snake;
var scl = 20;

var food;

function setup() {
  createCanvas(800, 600);
  snake = new Snake();
  frameRate(10);
  snake.dir(0, 0);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  // console.log(cols, rows, food);
}

function draw() {
  background(51);
  snake.update();
  snake.show();

  if (snake.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}
