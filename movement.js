function keyPressed() {
  switch (keyCode) {
    case ENTER:
      snake.dir(1, 0);
      break;
    case UP_ARROW:
      snake.dir(0, -1);
      break;
    case DOWN_ARROW:
      snake.dir(0, 1);
      break;
    case RIGHT_ARROW:
      snake.dir(1, 0);
      break;
    case LEFT_ARROW:
      snake.dir(-1, 0);
    default:
      break;
  }
}
