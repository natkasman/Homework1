function draw(x){
  var count = 0;
  while (count < x){
    setColor("blue");
    down();
    count = count + 1;
  }
  count = 0;
  while (count < x){
    setColor("blue");
    right();
    count = count + 1;
  }
  count = 0;
  while (count < x){
    setColor("blue");
    up();
    count = count + 1;
  }  
  count = 0;
  while (count < x){
    setColor("blue");
    left();
    count = count + 1;
  } 
}
draw(2);
