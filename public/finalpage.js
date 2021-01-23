let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty = 40;

let database;
let textbox;

// let word;
// let picture;
// let words;
// let keys;
// let k;


function setup() {
createCanvas(windowWidth,90);
background("#fffbe8");

database = firebase.database();
// let ref = database.ref("pictures");
let ref = database.ref("words");
ref.once("value", gotData, errData);

let rx = width/2;
let ry = height/1.8;


let home = text("HOME",tx,ty);
push()
textFont("Nanum Myeongjo");
textSize(35);
fill("#6B00FF");
textAlign(CENTER);
let title = text("Memorypedia",rx,53);
pop()
push()
noFill();
strokeWeight(0.5);
rectMode(CENTER);
rect(width/2, height/2 - 0.5, windowWidth + 5, 90);
pop()
}

function gotData(data) {
// console.log(data.val());
// let pictures = data.val();
let words = data.val();

// let keys = Object.keys(pictures);
let keys = Object.keys(words);

// console.log(keys);
for (var i = 0; i < keys.length; i++) {
let k = keys[i];

let drawing = words[k].picture;
let word = words[k].word;
console.log(word);
// if (typeof words.word) {
let allWords = createP(word).style("display", "inline").style("margin-right", 10 + "px").style("font-family", "Helvetica").addClass('p');
// }
// let mText = text(words, 100, 100);
// let li = createElement("li", word);
// li.parent("list");

// let allDrawings = createElement("drw", drawing).style("width", 40 + "px").style("height", 40 + "px");
//allDrawings.show(showDrawing);

// let allImages = createElement("img", drawing).style("width", 30 + "px").style("height", 30 + "px");
// allImages.src = drawing;
// else if (typeof words.picture) {

let allImages = createImg(drawing, () => {
    allImages.size(AUTO, 60);
  }
);
// }

// let imagez = image(picture, 100, 100, 100, 100);
// if (Object.values(words).indexOf('test1') > -1) {
//    console.log('has test1');
// }
  // console.log(drawing);
  // console.log(image)

}
}
// for (var i = 0; i < keys2.length; i++) {
// let k2 = keys2[i];
//
// let word = words[k2].word;
// console.log(word);
// let allWords = createP(word).style("display", "inline").style("margin-right", 10 + "px").addClass('p');
// }
// }

// if (check) {
//     console.log(drawing);
// }
// }
//
// function check() {
// if (typeof word !== 'undefined') {
//   return false;
// }
// else {
//   return true;
// }
// }

function errData(err) {
  console.log("Error");
  console.log(err);
}

function draw() {
strokeWeight(0.5);
rectMode(CENTER);



if (overHome(tx, ty) && mouseIsPressed) {
window.open("index.html", "_self")
}
// let ref = datatbase.ref("words/" + key);
// if (overRect(rx, ry, rw, rh) && mouseIsPressed) {
//   saveTheWord()
// }

}

// function showDrawing() {
//   console.log(this.html());
//   var ref = database.ref("drawing/" + key);
//   // ref.on("value", onDrawing, errData)
//   //
//   // function oneDrawing(data) {
//   //   var ndrawing = data.val();
//   //   drawing = ndrawing.drawing;
//   // }
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
