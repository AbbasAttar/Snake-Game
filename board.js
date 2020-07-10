let snake;
let scl = 20;
let food;
let cs0 = document.getElementsByClassName("current-score")[0];
let cs1 = document.getElementsByClassName("current-score")[1];
let hs0 = document.getElementsByClassName("high-score")[0];
let hs1 = document.getElementsByClassName("high-score")[1];
let go = document.getElementById("game-over");
function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("sketch-div");
  snake = new Snake(width, height);
  frameRate(10);
  snake.dir(0, 0);
  pickLocation();
  if (!localStorage.getItem("HS")) {
    localStorage.setItem("HS", 0);
  }
  hs0.innerHTML = localStorage.getItem("HS");
  hs1.innerHTML = localStorage.getItem("HS");
  // console.log(hs, hs1);
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
    if (snake.xSpeed !== 0 || snake.ySpeed !== 0) {
      snake.update();
    }
    snake.show();
    if (snake.eat(food)) {
      pickLocation();
    }
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
    cs0.innerHTML = snake.body.length - 1;
    cs1.innerHTML = snake.body.length - 1;
    if (snake.body.length - 1 >= hs0.innerHTML) {
      localStorage.setItem("HS", snake.body.length - 1);
      hs0.innerHTML = localStorage.getItem("HS");
      hs1.innerHTML = localStorage.getItem("HS");
    }
  } else {
    go.style.display = "block";
    snake.reset();
  }
  // console.log(snake.isNotDead(snake.body[0].x, snake.body[0].y));
}
