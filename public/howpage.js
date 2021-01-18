let tx = 30;
let ty = 40;

function preload(){
  // put preload code here
}

function setup() {
createCanvas(windowWidth, windowHeight);

}

function draw(){
  background("#FFFBE8")
  text("how to collaborate", width/2, height/2);
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
