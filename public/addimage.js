let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty = 40;

let img;
let database;
let picture;
let image64;
let myImage;

let timer = 60;

let socket = io();

socket.on("connect", newConnection);
socket.on('redirect', redi);


function newConnection() {
  console.log("your id:", socket.id);
}


function redi(destination) {
 window.location.href = destination;
}


function preload() {
  // put preload code here
}

function setup() {
canvas =  createCanvas(windowWidth, windowHeight);

  //file input
  push()
  input = createFileInput(handleFile);
  //input.center();
  input.position(windowWidth / 2 - 300, windowHeight / 2 + 195);
  input.addClass("uploadstyle");
  input.style("border-width", 0.5 + "pt").style("border-color", "black");
  //input.style("background-color", "#fffbe8");
  //input.resize(400, 300);
  pop()

  //firebase
  database = firebase.database();
  let ref = database.ref("words");
  ref.on("value", gotData, errData);

  //add button
  let addImageButton;
  addImageButton = createButton("ADD TO THE CHAIN");
  addImageButton.position(windowWidth / 2 + 5, windowHeight / 2 + 194);//+ 250
  addImageButton.mouseClicked(saveImage);
  //addImageButton.style("font-size", 9 + "pt").style("padding-top", 10.8 + "pt").style("padding-bottom", 10.8 + "pt").style("padding-right", 183 + "pt").style("padding-left", 183 + "pt").style("boxShadow", "none").style("border-width", 0.5 + "pt").style("border-color", "black").style("border-radius", 0 + "px").style("outline", "none");
  addImageButton.style("font-size", 9 + "pt").style("padding-top", 11.3 + "pt").style("padding-bottom", 11.3 + "pt").style("padding-right", 68 + "pt").style("padding-left", 68 + "pt").style("boxShadow", "none").style("border-width", 0.3 + "pt").style("border-color", "black").style("border-radius", 0 + "px").style("outline", "none");
  addImageButton.addClass("bottone");
}

//drag and drop
// function gotFile(file
// let img = createImg(file.data);
// img.size(100, 100);
// image(img, 0, 0, width, height);
// }

// function hightlight() {
//   dropzone.style("background-color", "#ccc");
// }
//
//
// function unhightlight() {
//   dropzone.style("background-color", "#FFFBE8");
// }


function draw() {
  background("#fffbe8");
  push()
  textSize(15);
  textAlign(CENTER);
  text("SECONDS LEFT", windowWidth / 2, windowHeight / 4.4);
  pop()

  push()
  rect(windowWidth/2 - 300, windowHeight / 2 + 194.8, 295, 43);
  strokeWeight(1);
  stroke("black");
  noFill();
  pop()


push()
textAlign(CENTER);
textSize(16);
fill("#6B00FF");
text(timer, windowWidth / 2, windowHeight / 5);

if (frameCount % 60 == 0 && timer > 0) {
  timer --;
} else if (timer == 0) {
  window.open("timeover.html", "_self")
}
pop()

push()
//strokeWeight(0.5);
let rx = width/2;
let ry = height/2;
rectMode(CENTER);
noStroke();
fill("white");
let box = rect(width/2, height/2, 600, 300);
pop()
//display image
  if (img) {
    myImage = image(img, windowWidth/2, windowHeight/2, (img.width * 250)/img.height, 250);
    imageMode(CENTER)
  }

  // if (img) {
  //   loadImage(img, () => {
  //       size(AUTO, 60);
  //     });
  // }

  // let allImages = createImg(drawing, () => {
  //     allImages.size(AUTO, 60);
  //   }


}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    image64 = file.data;
    loadPixels();
    img.hide();
  } else {
    img = null;
  }
}

function errData(err) {
  console.log("Error");
  console.log(err);
}

function gotData(data) {
  if (img) {
    // console.log(data.val());
    let pictures = data.val();
    let keys = Object.keys(pictures);
    for (var i = 0; i < keys.lenght; i++) {
      let k = keys[i];
      let picture = pictures[k].picture;
      console.log(picture);
    }
  }
}

function saveImage() {
  // console.log(image64);
  let data = {
    picture: image64
  }
  console.log(data);
  let ref = database.ref("words");


  ref.push(data);
  setTimeout(continueExecution, 5000)
}

function continueExecution()
 {

window.open("finalpage.html", "_self")

 }

function overRect(x, y, w, h) {
  if (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y - h / 2 && mouseY < y + h / 2) {
    return true;
  } else {
    return false;
  }
}

function overHome(x, y) {
  if (mouseX > x && mouseX < +x + 50 && mouseY > y / 1.5 && mouseY < y) {
    return true;
  } else {
    return false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
