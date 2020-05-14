// SELECT CVS
const cvs = document.getElementsById("bird");
const ctx = cvs.getContext("2d");

// GAME VARS AND CONSTS
let frames = 0;

// DRAW
function draw(){
	ctx.fillStyle = "#70c5ce";
	ctx.fillRect(0, 0, cvs.width, cvs.height);
}

// UPDATE
function update(){
}

// LOOP
function loop(){
	update();
	draw();
	frames++;

	requestAnimationFrame(loop);
}

loop();
