// Rudy Goes Down

function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

repeatDown(4);

// Rudy Goes Right

function goRight(total) {
  var count = 0;
  while (count < total) {
    right();
    count = count + 1;
  }
}
goRight(1);

// Rudy Opens 1st Gate

var firstColorSeen = getColor();
repeatDown(1);
setColor (firstColorSeen);
goRight(2);

// Rudy Goes Up

function goUp(total) {
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}

goUp(1);
goRight(1);

// Rudy Opens 2nd Gate

var secondColorSeen = getColor();
repeatDown(1);
setColor(secondColorSeen);
goRight(2);
