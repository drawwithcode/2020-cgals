
let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty = 40;

let database;
let textbox;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // myText = createP(textbox.value()).hide();

database = firebase.database();
let ref = database.ref("words/");
ref.on("value", gotData, errData);

}


function gotData(data) {
// console.log(data.val());
let words = data.val();
let keys = Object.keys(words);
// console.log(keys);
for (var i = 0; i < keys.length; i++) {
let k = keys[i];

let word = words[k].word;
console.log(words);
// let mText = text(words, 100, 100);
let li = createElement("li", word);
li.parent("list");
}
}

function errData(err) {
  console.log("Error");
  console.log(err);
}

function draw() {
background("#fffbe8");
strokeWeight(0.5);
rectMode(CENTER);

let rx = width/2;
let ry = height/1.8;


let home = text("HOME",tx,ty);

if (overHome(tx, ty) && mouseIsPressed) {
window.open("index.html", "_self")
}
// let ref = datatbase.ref("words/" + key);
// if (overRect(rx, ry, rw, rh) && mouseIsPressed) {
//   saveTheWord()
// }

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
