let tx = 25;
let ty = 40;

function preload(){
  // put preload code here
}

function setup() {
  var canvas = createCanvas(windowWidth, 80);
  canvas.parent('sketch-holder');

}

function draw(){
  background("#FFFBE8")
  let home = text("HOME",tx,ty);

  if (overHome(tx, ty) && mouseIsPressed) {
  window.open("index.html", "_self")
  }
}

function overHome(x, y) {
	if (mouseX > x && mouseX < + x+50 && mouseY > y/1.5 && mouseY < y) {
	  return true;
	} else {
	  return false;
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
