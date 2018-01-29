// Rudy Goes Down

function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}
repeatDown(6);

// Rudy Goes Right

function goRight(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
  }
}
goRight(3);

// Rudy Goes Up

function goUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}

goUp(2);
goRight(2);
repeatDown(3);
