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

let sketch = function(backgroundCanvas) {
  backgroundCanvas.setup = function() {
    let backgroundC = backgroundCanvas.createCanvas(windowWidth, windowHeight);
    backgroundCanvas.background("#fffbe8");

    backgroundCanvas.push()
    backgroundCanvas.noStroke();
    let home = backgroundCanvas.text("HOME",tx,ty);
    backgroundCanvas.pop()

    // if (overHome(tx, ty) && mouseIsPressed()) {
    // window.open("index.html", "_self")
    // }

    backgroundCanvas.strokeWeight(0.5);
    backgroundCanvas.rectMode(CENTER);

    let rx = width/2;
    let ry = height/1.8;
    let rw = 600;
    let rh = 45;

    backgroundCanvas.push()
    if (backgroundCanvas.overRect(rx, ry, rw, rh)) {
        backgroundCanvas.fill("white");
        backgroundCanvas.stroke("black");
      } else {
        backgroundCanvas.noFill();
        backgroundCanvas.stroke("black");
      }
      backgroundCanvas.rect(windowWidth/2, windowHeight/2 + 150, rw, rh);
      //backgroundCanvas.mousePressed(saveDrawing)
    backgroundCanvas.pop()

    backgroundCanvas.push();
      backgroundCanvas.textAlign(CENTER);
      backgroundCanvas.text("ADD TO THE CHAIN", windowWidth/2, windowHeight/2 + 155);
      backgroundCanvas.fill("black");
      backgroundCanvas.noStroke();
    backgroundCanvas.pop()
  };

  backgroundCanvas.draw = function() {

    //add border
    // addWordbutton = backgroundCanvas.rect(rx, ry, rw, rh);
    // let addToChain = backgroundCanvas.text("ADD TO THE CHAIN",rx,ry+5)

    // addWordButton.mouseClicked();
  };

  backgroundCanvas.overRect = function(x, y) {
    if (backgroundCanvas.mouseX > backgroundCanvas.x && backgroundCanvas.mouseX < + backgroundCanvas.x+50 && backgroundCanvas.mouseY > backgroundCanvas.y/1.5 && backgroundCanvas.mouseY < backgroundCanvas.y) {
      return true;
    } else {
      return false;
    }
  };

  backgroundCanvas.mouseClicked = function() {
    //backgroundCanvas.saveCanvas(canvas, "myCanvas", ".png");
    window.open("index.html", "_self");
  };


    backgroundCanvas.windowResized = function() {
      backgroundCanvas.resizeCanvas(windowWidth, windowHeight);
    };

}

let backgroundCanvas = new p5(sketch);
let home = new p5(text1);


function preload(){
  // put preload code here
}

function setup() {
// canvas = createCanvas(windowWidth,windowHeight);
canvas = createCanvas(500, 300);
canvas.background("white");
canvas.mousePressed(startPath);
//canvas.parent("canvascontainer");
canvas.mouseReleased(endPath);
canvas.position(windowWidth/2 - 250, windowHeight/2 - 250);

push()
let r = rect(0, 0, 500, 300);
r.noFill();
r.stroke("black");
r.strokeWeight(1);
pop()

database = firebase.database();

let ref = database.ref("drawings");
ref.on("value", gotData, errData);

// let saveButton = select("#saveButton");
// saveButton.mousePressed(saveDrawing);

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

// push()
// noStroke();
// let home = text("HOME",tx,ty);
// pop()

// if (overHome(tx, ty) && mouseIsPressed) {
// window.open("index.html", "_self")
// }


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
// //add border
// addWordbutton = rect(rx, ry, rw, rh);
// textAlign(CENTER);
// let addToChain = text("ADD TO THE CHAIN",rx,ry+5)

// myText = textbox.value();

// addWordButton.mouseClicked();
}

// function saveDrawing() {
//   // var ref = database.ref("drawings");
//   // var data = {
//   //   drawing: drawing
//   // }
//   // ref.push(data);
//   saveCanvas(canvas, "myCanvas");
// }

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
