function direction(key) {
  switch (key) {
    case 38:
      if (this.lastKey !== 40) {
        snake.dir(0, -1);
        this.lastKey = 38;
      }
      break;
    case 40:
      if (this.lastKey !== 38) {
        snake.dir(0, 1);
        this.lastKey = 40;
      }
      break;
    case 39:
      if (this.lastKey !== 37) {
        snake.dir(1, 0);
        this.lastKey = 39;
      }
      break;
    case 37:
      if (this.lastKey !== 39) {
        snake.dir(-1, 0);
        this.lastKey = 37;
      }
      break;
    default:
      console.log("in default");
      break;
  }
}

function keyPressed() {
  document.getElementById("game-over").style.display = "none";
  document.getElementsByClassName("new-game")[0].style.display = "none";
  switch (keyCode) {
    case ENTER:
      if (this.lastKey === undefined) {
        snake.dir(1, 0);
      } else {
        keyCode = this.lastKey;
        direction(keyCode);
      }
      this.lastKey = 39;
      break;
    case 32: //SPACE BAR
      snake.dir(0, 0);
      break;
    default:
      direction(keyCode);
      break;
  }
}
