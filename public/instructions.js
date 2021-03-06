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
      let ready = text("START EVOKING YOUR MEMORIES",rx,ry+5)
      pop()
      let home = text("HOME",tx,ty);

      if (overRect(rx, ry, rw, rh) && mouseIsPressed) {
      window.open("lastcontribution.html", "_self")
      }
      else if (overHome(tx, ty) && mouseIsPressed) {
      window.open("index.html", "_self")
      }

      push()
      textFont("Nanum Myeongjo");
      textSize(29.5);
      fill("#6B00FF");
      textAlign(LEFT);
      let title = text("When you press the following button, you'll \nsee the contribution of the last user who \ncollaborated to Memorypedia. \nYou'll have 1 minute to think of a way for \ncontinuing the chain: by adding a word, \na picture or by drawing. \nOnce you have saved, your contribution will \nbe posted and you'll be able to see the full chain, \nfrom the first piece to the last!", width/3.3, height/4);
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
