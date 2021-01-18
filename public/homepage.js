let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty1 = 40;
let ty2 = 60;

function preload(){
  // put preload code here

}

function setup() {
createCanvas(windowWidth, windowHeight);


}

function draw() {
  let rx = width/2;
  let ry = height/1.2;
rectMode(CENTER);
  background("#FFFBE8")
  strokeWeight(0.5);

  if (overRect(rx, ry, rw, rh)) {

  		fill("white");
      stroke("black");
  	} else {
  	  noFill();
  		stroke("black");

  	}

    	let startbutton = rect(rx, ry, rw, rh);


    fill("black");
    noStroke();
    let about = text("ABOUT",tx,ty1)
    let how = text("HOW TO COLLABORATE",tx,ty2)
    push()
    textAlign(CENTER);
    let start = text("ENTER & COLLABORATE",rx,ry+5)
    pop()


    if (overRect(rx, ry, rw, rh) && mouseIsPressed) {
    window.open("intro.html", "_self")
    }
    else if (overAbout(tx, ty1) && mouseIsPressed) {
    window.open("aboutpage.html", "_self")
    }
    else if (overHow(tx, ty2) && mouseIsPressed) {
    window.open("howpage.html", "_self")
    }

}

function overRect(x, y, w, h) {
	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2) {
	  return true;
	} else {
	  return false;
	}
}

function overAbout(x, y) {
	if (mouseX > x && mouseX < + x+50 && mouseY > y/1.5 && mouseY < y) {
	  return true;
	} else {
	  return false;
	}
}

function overHow(x, y) {
	if (mouseX > x && mouseX < x+50 && mouseY > y/1.2 && mouseY < y) {
	  return true;
	} else {
	  return false;
	}
}


// function goToAbout() {
// if (overAbout(rx, ry, rw, rh) && mouseIsPressed) {
// window.open("aboutpage.html", "_self")
// }
// }
//
// function goToHowToEnter() {
// if (overHow(rx, ry, rw, rh) && mouseIsPressed) {
// window.open("aboutpage.html", "_self")
// }
// }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
