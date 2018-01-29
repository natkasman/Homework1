function GoDown() {
  var steps = 0
  while (steps < 8) {
    down();
    steps = steps + 1
	}
  right();
  right();
}


function GoUp() {
  var steps = 0
  while (steps < 8) {
    up();
    steps = steps + 1
	}
  right();
  right();
}

GoDown();
GoUp();
GoDown();
GoUp();
GoDown();

right();
