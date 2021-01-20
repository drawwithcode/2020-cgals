let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty = 40;

let database;
let drawing = [];
let isDrawing = false;

let currentPath;

function preload(){
  // put preload code here
}

function setup() {
// canvas = createCanvas(windowWidth,windowHeight);
canvas = createCanvas(500, 500);
canvas.mousePressed(startPath);
canvas.parent("canvascontainer");
canvas.mouseReleased(endPath);

database = firebase.database();

let ref = database.ref("drawings");
ref.on("value", gotData, errData);

let saveButton = select("#saveButton");
saveButton.mousePressed(saveDrawing);

}

function startPath() {
  isDrawing = true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath() {
  isDrawing = false;
}

function draw() {
// background("#fffbe8");

push()
noStroke();
let home = text("HOME",tx,ty);
pop()

if (isDrawing) {
  let point = {
    x: mouseX,
    y: mouseY
  }
currentPath.push(point);
}

stroke("black");
noFill();
strokeWeight(2);
for (var i = 0; i < drawing.length; i++) {
  let path = drawing[i];
  beginShape();
for (var j = 0; j < path.length; j++) {
  vertex(path[j].x, path[j].y)
}
endShape();
}
// strokeWeight(0.5);
// rectMode(CENTER);
//
// let rx = width/2;
// let ry = height/1.8;
//
//
//
// let textbox;
// let inputText = "Enter your word here";
// let addWordButton;
// let buttonText = "ADD TO THE CHAIN";
//
//
//
// push()
//
// if (overRect(rx, ry, rw, rh)) {
//
//     fill("white");
//     stroke("black");
//   } else {
//     noFill();
//     stroke("black");
//
//   }
//
//   rect(rx, height/2.5, rw, rh)
//   pop()
//
//
// push()
// textbox = createInput(inputText);
// textbox.position(rx/2.33, height/2.75);
// textbox.size(568, rh-3);
// textbox.style("font-size", 10 + "pt").style("padding-left", 20 + "pt").style("boxShadow", "none").style("border", 0 + "px");
// pop()
//
//
// //add border
// addWordbutton = rect(rx, ry, rw, rh);
// textAlign(CENTER);
// let addToChain = text("ADD TO THE CHAIN",rx,ry+5)
//
// // myText = textbox.value();
//
//
// textAlign(CENTER)
// let home = text("HOME",tx,ty);
//
// if (overHome(tx, ty) && mouseIsPressed) {
// window.open("index.html", "_self")
// }
//
// addWordButton.mouseClicked();
}

function saveDrawing() {
  var ref = database.ref("drawings");
  var data = {
    drawing: drawing
  }
  ref.push(data);
}

function errData(err) {
  console.log("Error");
  console.log(err);
}

function gotData(data) {
// console.log(data.val());
let drawings = data.val();
let keys = Object.keys(drawings);
console.log(keys);
for (var i = 0; i < keys.lenght; i++) {
  let k = keys[i];

}
}


function overRect(x, y, w, h) {
	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2) {
	  return true;
	} else {
	  return false;
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
