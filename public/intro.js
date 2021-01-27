let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty = 40;

function preload(){
  // put preload code here
}

function setup() {
createCanvas(windowWidth, windowHeight);

}

function draw(){
  background("#FFFBE8")
  text("intro", width/2, height/2);

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

    	let readybutton = rect(rx, ry, rw, rh);

      fill("black");
      noStroke();
      push()
      textAlign(CENTER);
      let ready = text("GET YOUR INVOLUNTARY MEMORY READY",rx,ry+5)
      pop()
      let home = text("HOME",tx,ty);

      if (overRect(rx, ry, rw, rh) && mouseIsPressed) {
      window.open("instructions.html", "_self")
      }
      else if (overHome(tx, ty) && mouseIsPressed) {
      window.open("index.html", "_self")
      }

      push()
      textFont("Nanum Myeongjo");
      textSize(29.5);
      fill("#6B00FF");
      textAlign(LEFT);
      let intro = text("Words and images can evoke memories, \n creating worlds and links that go beyond their \n literal meaning. \n By collaborating to this experience you'll get to \n see how a small part of your own \n 'encyclopedia' can generate a narrative chain \n together with other users' contribution.", width/3.35, height/4);
      //intro.addClass("static");
      pop()

}

function overRect(x, y, w, h) {
	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2) {
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
