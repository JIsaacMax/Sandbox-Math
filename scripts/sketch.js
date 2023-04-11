const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
var zoomValue=1;
var listDraws = [];
ear("wheel", zoomWeel);

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  drawCartesianPlane();
}

function draw() {
  scale(zoomValue%10);
  listDraws.forEach(draw => {
    stroke(`rgba(${randRGB()},${randRGB()},${randRGB()},0.25)`);
    line(draw.x1, draw.y1, draw.x2, draw.y2);
  });
}

var startPoint
function mousePressed(){
  startPoint = {x: mouseX, y: mouseY};
}

//Draw Line By Mouse
function mouseDragged(){
  background(0);
  drawCartesianPlane();
  strokeWeight(4);
  stroke(`rgba(${randRGB()},${randRGB()},${randRGB()},0.25)`);
  line(startPoint.x, startPoint.y, zAjust(pmouseX), zAjust(pmouseY));
  listDraws.push({x1: startPoint.x, y1: startPoint.y, x2: zAjust(pmouseX), y2: zAjust(pmouseY)});
}

//Draw Circle By Mouse Click
function mouseClicked(){
  noStroke();
  fill(`rgba(${randRGB()},${randRGB()},${randRGB()},0.25)`);
  circle(zAjust(mouseX), zAjust(mouseY), 50);
}

function drawCartesianPlane() {
    strokeWeight(4);
    stroke(255, 0, 0);
    line(canvasWidth / 2, 0, canvasWidth / 2, canvasHeight);
    stroke(0, 0, 255);
    line(0, canvasHeight / 2, canvasWidth, canvasHeight / 2);


    stroke(50);
    strokeWeight(1);
    //vertical lines draw
    for (let i = canvasWidth / 2; i < canvasWidth; i += 20) {
        line(i, 0, i, canvasHeight);
        line(canvasWidth - i, 0, canvasWidth - i, canvasHeight);
    }
    //horizontal lines draw
    for (let i = canvasHeight / 2; i < canvasHeight; i += 20) {
        line(0, i, canvasWidth, i);
        line(0, canvasHeight - i, canvasWidth, canvasHeight - i);
    }
    noStroke();
    fill(255);
    //horizontal cordinates draw
    for (let i = canvasWidth / 2; i < canvasWidth; i += 100) {
        text(i, i, canvasHeight / 2);
        text(i, canvasWidth - i, canvasHeight / 2);
    }
    //vertical cordinates draw
    for (let i = canvasHeight / 2; i < canvasHeight; i += 100) {
        text(i, canvasWidth / 2, i);
        text(i, canvasWidth / 2, canvasHeight - i);
    }
}

function bascara(a, b, c) {
    let delta = (b * b) - (4 * a * c);
    if (delta < 0) {
        return alert("Nao existe raiz real");
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }
}

function personalFunction(x) {
    return (x*x) - (5*x) + 5;
  }

function zAjust(number){
  return number/zoomValue;
}

function zoomWeel(event) {
    if(zoomValue>0 && event.deltaY>0) zoomValue -= (event.deltaY/canvasHeight);
    if(zoomValue<8 && event.deltaY<0) zoomValue += ((event.deltaY/canvasHeight)*-1);
    say(zoomValue);
    // resizeCanvas((canvasWidth * zoomValue), canvasHeight * zoomValue);
    background(0);
    drawCartesianPlane();
}