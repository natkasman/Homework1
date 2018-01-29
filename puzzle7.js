function move (){
  while (getColor() != "red"){
      down();
  }
  right();
  right();
  while (getColor() != "red"){
    up();
  }
  right();
  right();
}

move();
move();

while (getColor() != "red"){
      down();
  }
right();
