var balls = []; // empty array

function setup() { 
  createCanvas(640,360);
	
  // for loop is used to create multiple ball objects
	for (var i = 0; i < 10; i++) {
    balls[i] = new Ball(width/2, height/2);
  }
} 

function draw() { 	
  // go over every ball in array
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
    balls[i].bounce();
  }
}

function mousePressed() {
  // with each mouse press, craa new ball at mouse location
  // this ball is added to the array
  balls.push( new Ball(mouseX, mouseY) );
}

// constructor function is the same.
// it's a blueprint for creating many balls.
function Ball(x, y) {
	this.x = x;
	this.y = y;
	this.sz = 12;
	this.xspeed = random(-2, 2);
	this.yspeed = random(-2, 2);
	
	this.update = function() {
		this.x += this.xspeed;
		this.y += this.yspeed;
	};
	
	this.display = function() {
		fill(255,7,14,20);
		stroke(0);
		ellipse(this.x, this.y, 48,48);
	};
	
	this.bounce = function() {
		if (this.x > width || this.x < 0) {
			this.xspeed *= -1;
		}
		if (this.y > height || this.y < 0) {
			this.yspeed *= -1;
		}
	}
}