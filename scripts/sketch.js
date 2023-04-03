function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function draw() {
    background(0);

  // Draw a line in the center of the screen
    drawCartesianPlane();
}

function drawCartesianPlane() {
    strokeWeight(4);
    stroke(255, 0, 0);
    line(canvasWidth / 2, 0, canvasWidth / 2, canvasHeight);
    stroke(0, 0, 255);
    line(0, canvasHeight / 2, canvasWidth, canvasHeight / 2);


    stroke(50);
    strokeWeight(1);
    for (let i = canvasWidth / 2; i < canvasWidth; i += 50) {
        line(i, 0, i, canvasHeight);
        line(canvasWidth - i, 0, canvasWidth - i, canvasHeight);
    }
    for (let i = canvasHeight / 2; i < canvasHeight; i += 50) {
        line(0, i, canvasWidth, i);
        line(0, canvasHeight - i, canvasWidth, canvasHeight - i);
    }
}
