let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty = 40;

let database;
let textbox;

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

let words = data.val();

let keys = Object.keys(words);

for (var i = 0; i < keys.length; i++) {
let k = keys[i];

let picture = words[k].picture;
let word = words[k].word;

push()
let allWords = createP(word).style("display", "inline").style("margin-right", 10 + "px").style("font-family", "Helvetica").addClass('p');
pop()


  push()
  if (picture !== undefined) {
      let allImages = createImg(picture,
        () => {
      allImages.size(AUTO, 60);
    }
  );
}
pop()


}
}


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
