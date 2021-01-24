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

//let timer = 120;

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) {
            window.open("timeover.html", "_self")
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

function preload(){
  // put preload code here
}

function setup() {
// canvas = createCanvas(windowWidth,windowHeight);
push()
let canvas = createCanvas(500, 500);
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

let ref = database.ref("words");
ref.on("value", gotData, errData);

  let saveButton = select("#saveButton");
  saveButton.mousePressed(saveDrawing);
  saveButton.position(windowWidth / 2 - 300, windowHeight / 2 + 300);
  //saveButton.mouseClicked(saveTheWord);
  saveButton.style("font-size", 9 + "pt").style("padding-top", 10.8 + "pt").style("padding-bottom", 10.8 + "pt").style("padding-right", 183 + "pt").style("padding-left", 183 + "pt").style("boxShadow", "none").style("border-width", 0.5 + "pt").style("border-color", "black").style("border-radius", 0 + "px").style("outline", "none");    //.style("border", 2 + "px")

  // let countDown = select("#demo");
  // countDown.center());
  // countDown.textSize(16);
  // countDown.fill("#6B00FF");
  // countDown.text(timer, windowWidth / 2, windowHeight / 3.7);
  //
  // // if (frameCount % 60 == 0 && timer > 0) {
  // //   timer --;
  // // } else if (timer == 0) {
  // //   window.open("timeover.html", "_self")
  // // }

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
  var ref = database.ref("words");
    loadPixels();
  const image64 = canvas.toDataURL();
  console.log(image64);
  var data = {
    picture: image64
  }
        var result = ref.push(data, dataSent);
        console.log(result.key);

        function dataSent(status) {
          console.log(status);
        }

        window.open("finalpage.html", "_self")
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

let bordo = function(b) {
  b.setup = function() {
    b.rect(b.windowWidth/2 - 300, b.windowHeight/2 + 190, 600, 45);
    b.strokeWeight(1);
    b.stroke("black");
    b.noFill();
  }
}
let b = new p5(bordo);

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
