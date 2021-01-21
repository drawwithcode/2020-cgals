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

let timer = 155;

// let socket = io();
//
// socket.on("connect", newConnection);
//
// function newConnection() {
//   console.log("id: " + socket.id);
//   //text("welcome", 20, 20);
// }

function setup() {
  createCanvas(windowWidth,windowHeight);

let home = text("HOME",tx,ty);

database = firebase.database();
let ref = database.ref("words/");
ref.on("value", gotData, errData);

textbox = createInput(inputText);
textbox.position(windowWidth / 2 - 300, windowHeight / 2 - 70);
textbox.size(573, 60);
textbox.style("font-size", 10 + "pt").style("padding-left", 20 + "pt").style("boxShadow", "none").style("border-width", 0.5 + "pt").style("border-color", "black").style("border-radius", 0 + "px");

addWordButton = createButton("ADD TO THE CHAIN");
addWordButton.position(windowWidth / 2 - 300, windowHeight / 2 + 20);
addWordButton.mouseClicked(saveTheWord);
addWordButton.style("font-size", 9 + "pt").style("padding-top", 10.8 + "pt").style("padding-bottom", 10.8 + "pt").style("padding-right", 183 + "pt").style("padding-left", 183 + "pt").style("boxShadow", "none").style("border-width", 0.5 + "pt").style("border-color", "black").style("border-radius", 0 + "px");    //.style("border", 2 + "px")
}

function draw() {
  background("#fffbe8");
  push()
  textSize(15);
  textAlign(CENTER);
  text("SECONDS LEFT", windowWidth / 2, windowHeight / 3.3);
  pop()

push()
textAlign(CENTER);
textSize(16);
fill("#6B00FF");
text(timer, windowWidth / 2, windowHeight / 3.7);

if (frameCount % 60 == 0 && timer > 0) {
  timer --;
} else if (timer == 0) {
  window.open("timeover.html", "_self")
}
pop()

if (addWordButton && mouseIsPressed) {
  window.open("finalpage.html", "_self")
}

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

// function changePage(x, y) {
//   if (addWordButton) {
// 	  return true;
// 	} else {
// 	  return false;
// 	}
// }

// var clients = {};
// socket.on('connection', function(client) {
//   //Authenticate the client (Using query string parameters, auth tokens, etc...), and return the userID if the user.
//   var userId = authenticate(client);
//
//   if ( !userId ) {
//     //Bad authentication, disconnect them
//     client.disconnect();
//     return;
//   }
//
//   if (clients[userId]) {
//     //They already have a session, disconnect
//     clients[userId].disconnect();
//     //Set updated session here
//     clients[userId] = client;
//   }
//   client.broadcast({count: Object.keys(clients).length})
//   client.on('disconnect', function(){
//     delete clients[userId];
//   })
// })

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
