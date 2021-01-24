let rx;
let ry;
let rw = 600;
let rh = 45;

let tx = 30;
let ty = 40;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background("#fffbe8");

  let rx = width/2;
  let ry = height/1.2;
  rectMode(CENTER);
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
      let ready = text("RETURN TO THE HOMEPAGE",rx,ry+5)
      pop()

      if (overRect(rx, ry, rw, rh) && mouseIsPressed) {
      window.open("index.html", "_self")
      }

      push()
      textFont("Nanum Myeongjo");
      textSize(29.5);
      fill("#6B00FF");
      textAlign(CENTER);
      text("Looks like someone is already adding \ntheir contribution to Memorypedia... \nPlease return to the homepage \nand retry later!", windowWidth / 2, windowHeight / 2.3);
      pop()

    // push()
    //   textAlign(CENTER);
    //   textSize(20);
    //   text("Your time is over :( \n Please return to the homepage", windowWidth / 2, windowHeight / 2);
    // pop()

}

function overRect(x, y, w, h) {
	if (mouseX > x - w/2 && mouseX < x+w/2 && mouseY > y - h/2 && mouseY < y+h/2) {
	  return true;
	} else {
	  return false;
	}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
