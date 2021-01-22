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

let timer = 120;

function preload(){
  // put preload code here
}

let sketch = function(backgroundCanvas) {
  backgroundCanvas.setup = function() {
    backgroundCanvas.createCanvas(windowWidth, windowHeight);
    backgroundCanvas.background("#fffbe8");
  };

  backgroundCanvas.draw = function() {
  };
}

let backgroundCanvas = new p5(sketch);

function setup() {
// canvas = createCanvas(windowWidth,windowHeight);
push()
canvas = createCanvas(500, 500);
canvas.mousePressed(startPath);
//canvas.parent("canvascontainer");
canvas.mouseReleased(endPath);
canvas.position(windowWidth/2 - 250, windowHeight/2 - 250);
canvas.background("white");
//canvas.rect(windowWidth/2, windowHeight/2, 500, 500);
//position(ABSOLUTE);
//canvas.noFill();
//canvas.strokeWeight(0.5);
pop()

database = firebase.database();

let ref = database.ref("drawings");
ref.on("value", gotData, errData);

  let saveButton = select("#saveButton");
  saveButton.mousePressed(saveDrawing);
  saveButton.position(windowWidth / 2 - 300, windowHeight / 2 + 300);
  //saveButton.mouseClicked(saveTheWord);
  saveButton.style("font-size", 9 + "pt").style("padding-top", 10.8 + "pt").style("padding-bottom", 10.8 + "pt").style("padding-right", 183 + "pt").style("padding-left", 183 + "pt").style("boxShadow", "none").style("border-width", 0.5 + "pt").style("border-color", "black").style("border-radius", 0 + "px").style("outline", "none");    //.style("border", 2 + "px")

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
  // push()
  //   let home = createButton("HOME", tx,ty);
  //   //home.mousePressed(window.open("index.html", "_self"));
  //   home.position(tx,ty);
  //   home.style("font-size", 9 + "pt").style("boxShadow", "none").style("border-width", 0 + "pt").style("border-color", "black").style("outline", "none");    //.style("border", 2 + "px")
  //
  //   if (overHome(tx, ty) && mouseIsPressed) {
  //   window.open("index.html", "_self")
  //   }
  // pop()
  //
  // push()
  // // rect(windowWidth/2, windowHeight/2, 500, 500);
  // // //position(ABSOLUTE);
  // // noFill();
  // // strokeWeight(0.5);
  // pop()
// background("#fffbe8");

// push()
// noStroke();
// let home = text("HOME",tx,ty);
// pop()

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


// function overRect(x, y, w, h) {
// 	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2) {
// 	  return true;
// 	} else {
// 	  return false;
// 	}
// }

// function overHome(x, y) {
// 	if (mouseX > x && mouseX < + x+50 && mouseY > y/1.5 && mouseY < y) {
// 	  return true;
// 	} else {
// 	  return false;
// 	}
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
