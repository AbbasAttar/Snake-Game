function keyPressed() {
  this.lastKey = 0;
  switch (keyCode) {
    case ENTER:
      snake.dir(1, 0);
      break;
    case UP_ARROW:
      if (lastKey !== 40) {
        snake.dir(0, -1);
        lastKey = UP_ARROW;
      }

      break;
    case DOWN_ARROW:
      if (lastKey !== 38) {
        snake.dir(0, 1);
        lastKey = DOWN_ARROW;
      }

      break;
    case RIGHT_ARROW:
      if (lastKey !== 37) {
        snake.dir(1, 0);
        lastKey = RIGHT_ARROW;
      }
      break;
    case LEFT_ARROW:
      if (lastKey !== 39) {
        snake.dir(-1, 0);
        lastKey = LEFT_ARROW;
      }
      break;

    case 32: //SPACE BAR
      snake.dir(0, 0);
      break;
    default:
      break;
  }
}
