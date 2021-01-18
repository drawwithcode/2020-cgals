let word;

let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty = 40;

let database;
let textbox;
let inputText = "Enter your word here";
let addWordButton;
let buttonText = "ADD TO THE CHAIN";

function setup() {
  createCanvas(windowWidth,windowHeight);
background("#fffbe8");

let home = text("HOME",tx,ty);

database = firebase.database();
let ref = database.ref("words/");
ref.on("value", gotData, errData);

textbox = createInput(inputText);
textbox.position(windowWidth / 2 - 300, windowHeight / 2 - 75);
textbox.size(573, 70);
textbox.style("font-size", 10 + "pt").style("padding-left", 20 + "pt").style("boxShadow", "none").style("border", 0 + "px");

addWordButton = createButton("add");
addWordButton.position(windowWidth / 2 - 300, windowHeight / 2 + 20);
addWordButton.mouseClicked(saveTheWord);
addWordButton.style("font-size", 17 + "pt").style("padding-left", 20 + "pt").style("boxShadow", "none").style("border", 0 + "px");

}

function draw() {
strokeWeight(0.5);
rectMode(CENTER);

let rx = width/2;
let ry = height/1.8;


// push()
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
// pop()


// textAlign(CENTER);
// let addToChain = text("ADD TO THE CHAIN",rx,ry+5);



if (overHome(tx, ty) && mouseIsPressed) {
window.open("index.html", "_self")
}

// if (overRect(rx, ry, rw, rh) && mouseIsPressed) {
//   saveTheWord()
// }

}

function errData(err) {
  console.log("Error");
  console.log(err);
}

function gotData(data) {
// console.log(data.val());
let words = data.val();
let keys = Object.keys(words);
console.log(keys);
for (var i = 0; i < keys.lenght; i++) {
  let k = keys[i];
  let word = words[k].word;
  console.log(word);
}
}

function saveTheWord(){
let data = {
  word: textbox.value()
}
console.log(data);
let ref = database.ref("words/");

// let data = {
//   word:"dog",
// }
ref.push(data);
 }

// function overRect(x, y, w, h) {
// 	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2) {
// 	  return true;
// 	} else {
// 	  return false;
// 	}
// }

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
