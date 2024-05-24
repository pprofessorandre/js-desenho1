function setup() {
    createCanvas(600, 600);
    background("pink");
  }
  
  function draw() {
    stroke("blue");
    fill("yellow");
  
    if (mouseIsPressed){
      rect(mouseX, mouseY, 25, 34);
     }
  }