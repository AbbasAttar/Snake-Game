let snake;
let scl = 20;
let food;
let cs = document.getElementsByClassName("current-score")[0];
let cs1 = document.getElementsByClassName("current-score")[1];
let hs = document.getElementsByClassName("high-score")[0];
let hs1 = document.getElementsByClassName("high-score")[1];
let go = document.getElementById("game-over");
function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("sketch-div");
  snake = new Snake(width, height);
  frameRate(10);
  snake.dir(0, 0);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  // console.log(food);
  for (let i = 0; i < snake.body.length; i++) {
    if (food.x === snake.body[i].x && food.y === snake.body[i].y) {
      pickLocation();
      break;
    }
  }
}

function draw() {
  background(51);
  if (snake.isNotDead(snake.body[0].x, snake.body[0].y)) {
    snake.update();
    snake.show();
    if (snake.eat(food)) {
      pickLocation();
    }
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
    cs.innerHTML = snake.body.length - 1;
    cs1.innerHTML = snake.body.length - 1;
    if (snake.body.length - 1 >= hs.innerHTML) {
      hs.innerHTML = snake.body.length - 1;
      hs1.innerHTML = snake.body.length - 1;
    }
  } else {
    go.style.display = "block";
    snake.reset();
  }
  // console.log(snake.isNotDead(snake.body[0].x, snake.body[0].y));
}
