let rx;
let ry;
let rw = 195;
let rh = 45;

let tx = 30;
let ty = 40;
let array;
let lastItem;
let word;
let picture;
let loading = 0;
let lastContributionType;
let words;
let keys;
let k;

function preload(){
}

function setup() {
createCanvas(windowWidth, windowHeight);
database = firebase.database();
let ref = database.ref("words");
ref.once("value", gotData, errData);
}

function gotData(data) {
// console.log(data.val());
words = data.val();
keys = Object.keys(words);
// console.log(keys);
for (var i = 0; i < keys.length; i++) {
k = keys[i];
word = words[k].word;
picture = words[k].picture;
array = [];

//creates an array
Object.keys(words).forEach((key) => {
  array.push({[key]: words[key]});
});

}

//gets last item
lastItem = array.slice(array.length - 1);
console.log(lastItem);

//finds out if the element is a word or a picture
// console.log(lastItem.find(findWord));
lastContributionType = lastItem.find(findWord);

console.log(lastContributionType);


//shows last word contribution
if (lastContributionType) {
   console.log("it's a word!");
showWord();
}
else {
  console.log("its not!")
}
}

function findWord () {
  return word;
}

function showWord() {
let textCon = lastContributionType[k].word;
console.log(textCon);
// push()
// textSize(60);
// let lastWord = text(textCon, width/2, height/4);
// pop()

let allWords = createP(textCon).addClass('p');

 }

 // function showPicture() {
 //   p = loadImage(picture);
 // }

function errData(err) {
  console.log("Error");
  console.log(err);
}


function draw(){
  background("#FFFBE8")
  strokeWeight(0.5);

  let rx = width/2;
  let ry = height/2;
rectMode(CENTER);


//white box

fill("white");
stroke("black");
let box = rect(width/2, height/2.1, 600, 250);


textAlign(CENTER);

//buttons
push()
  if (overWord(rx - 203, ry + 200, rw, rh)) {
fill("white");
      	stroke("black")
  	} else {
  	  noFill();
  		stroke("black");
  	}
let wordbutton = rect(rx - 203, ry + 200, rw, rh);

pop()
push()

        if (overPicture(rx, ry + 200, rw, rh)) {
      fill("white");
            	stroke("black")
        	} else {
        	  noFill();
        		stroke("black");
        	}
      let picturebutton = rect(width/2, ry + 200, rw, rh);
pop()
push()


      if (overDrawing(rx + 202.5, ry + 200, rw, rh)) {
    fill("white");
            stroke("black")
        } else {
          noFill();
          stroke("black");
        }
      let drawingbutton = rect(rx  + 202.5, ry + 200, rw, rh);
pop()

//question
      fill("black");
      noStroke();
      let question = text("What's the first thing that comes to your mind? Collaborate by adding...",rx - 113, ry + 165);


//buttons text

      let word = text("A WORD",rx - 203,ry+205)
      let picture = text("A PICTURE",width/2,ry+205)
      let drawing = text("A DRAWING",rx + 202.5,ry+205)
      let home = text("HOME",tx,ty);

//open pages


      if (overWord(rx - 203, ry + 200, rw, rh) && mouseIsPressed) {
      window.open("addword.html", "_self")
      }
      else if (overPicture(rx, ry + 200, rw, rh) && mouseIsPressed) {
      window.open("addimage.html", "_self")
      }
      else if (overDrawing(rx + 202.5, ry + 200, rw, rh) && mouseIsPressed) {
      window.open("draw.html", "_self")
      }
      else if (overHome(tx, ty) && mouseIsPressed) {
      window.open("index.html", "_self")
      }

}

function overWord(x, y, w, h) {
	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2)  {
	  return true;
	} else {
	  return false;
	}
}

function overPicture(x, y, w, h) {
	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2)  {
	  return true;
	} else {
	  return false;
	}
}

function overDrawing(x, y, w, h) {
	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2)  {
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
