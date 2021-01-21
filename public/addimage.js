let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty = 40;

let input;
let img;
let database;
let picture;
let image64;

let timer = 60;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //file input
  input = createFileInput(handleFile);
  input.position(0, 0);


  //firebase
  database = firebase.database();
  let ref = database.ref("words");
  ref.on("value", gotData, errData);

  //add button
  let addImageButton;
  addImageButton = createButton("ADD TO THE CHAIN");
  addImageButton.position(windowWidth / 2 - 300, windowHeight / 2 + 150);
  addImageButton.mouseClicked(saveImage);
  addImageButton.style("font-size", 9.5 + "pt").style("padding-top", 10.8 + "pt").style("padding-bottom", 10.8 + "pt").style("padding-right", 181 + "pt").style("padding-left", 181 + "pt").style("boxShadow", "none").style("border-width", 0.5 + "pt").style("border-color", "black").style("border-radius", 0 + "px");

}

//drag and drop
// function gotFile(file) {
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
  text("SECONDS LEFT", windowWidth / 2, windowHeight / 4);
  pop()

push()
textAlign(CENTER);
textSize(16);
fill("#6B00FF");
text(timer, windowWidth / 2, windowHeight / 4.4);

if (frameCount % 60 == 0 && timer > 0) {
  timer --;
} else if (timer == 0) {
  window.open("timeover.html", "_self")
}
pop()


//display image
  if (img) {
    image(img, 0, 0, width, height);
  }
  // strokeWeight(0.5);
  // rectMode(CENTER);
  //
  // let rx = width/2;
  // let ry = height/1.8;

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

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
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
    console.log(keys);
    for (var i = 0; i < keys.lenght; i++) {
      let k = keys[i];
      let picture = pictures[k].picture;
      console.log(picture);
    }
  }
}

function saveImage() {
  const image64 = canvas.toDataURL();
  console.log(image64);
  let data = {
    picture: image64
  }
  // console.log(data);
  let ref = database.ref("words/");

  // let data = {
  //   word:"dog",
  // }
  ref.push(data);
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
