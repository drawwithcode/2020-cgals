let rx;
let ry;
let rw = 600;
let rh = 45;
let tx = 30;
let ty = 40;

function preload(){
  // put preload code here
}

function setup() {
var canvas = createCanvas(windowWidth, 80);
canvas.parent('sketch-holder');

}

function draw(){
  background("#fffbe8")
  let rx = width/2;
  let ry = height/1.2;
// push()
//   if (overRect(rx, ry, rw, rh)) {
//       fill("white");
//       stroke("black");
//     } else {
//       noFill();
//       stroke("black");
//
//     }
//
//       let startbutton = rect(rx, ry, rw, rh);
// pop()


    let home = text("HOME",tx,ty);
// push()
//     textAlign(CENTER);
//     let start = text("ENTER & COLLABORATE",rx,ry+5)
//     pop()



if (overHome(tx, ty) && mouseIsPressed) {
  window.open("index.html", "_self")
  }
  // else if (overRect(rx, ry, rw, rh) && mouseIsPressed) {
  // window.open("intro.html", "_self")
  // }

}

function overHome(x, y) {
	if (mouseX > x && mouseX < + x+50 && mouseY > y/1.5 && mouseY < y) {
	  return true;
	} else {
	  return false;
	}
}

function overRect(x, y, w, h) {
	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2) {
	  return true;
	} else {
	  return false;
	}
}
