const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const halfWidth = canvasWidth / 2;
const halfHeight = canvasHeight / 2;

var zoomValue=1;
var listDraws = [];
var functionVector = [];
ear("wheel", zoomWeel);

function setup() {
  const screenCanvas = createCanvas(canvasWidth, canvasHeight);
  translate(halfWidth, halfHeight);
  background(0);
  drawCartesianPlane();
}

function draw() {
  translate(halfWidth, halfHeight);
  scale(zoomValue%10);
  background(0);
  drawCartesianPlane();
  listDraws.forEach(draw => {
    stroke(`rgba(${randRGB()},${randRGB()},${randRGB()},0.25)`);
    line(draw.x1, draw.y1, draw.x2, draw.y2);
  });
  functionVector.forEach(draw => {
    stroke(255);
    point(draw.x, -1*draw.y);
  });
}

// var startPoint
// function mousePressed(){
//   startPoint = {x: mouseX, y: mouseY};
// }

// //Draw Line By Mouse
// function mouseDragged(){
//   background(0);
//   drawCartesianPlane();
//   strokeWeight(4);
//   stroke(`rgba(${randRGB()},${randRGB()},${randRGB()},0.25)`);
//   line(startPoint.x, startPoint.y, zAjust(pmouseX), zAjust(pmouseY));
//   listDraws.push({x1: startPoint.x, y1: startPoint.y, x2: zAjust(pmouseX), y2: zAjust(pmouseY)});
// }

// //Draw Circle By Mouse Click
// function mouseClicked(){
//   noStroke();
//   fill(`rgba(${randRGB()},${randRGB()},${randRGB()},0.25)`);
//   circle(zAjust(mouseX), zAjust(mouseY), 50);
// }

function drawCartesianPlane() {
    strokeWeight(4);
    stroke(255, 0, 0);
    //Vertical line reference
    line(0, -1*canvasHeight, 0, canvasHeight);
    stroke(0, 0, 255);
    //Horizontal line reference
    line(-1*halfWidth, 0, canvasWidth, 0);


    stroke(50);
    strokeWeight(1);
    //vertical lines draw
    for (let i = 0; i < halfWidth; i += 20) {
        line(i, -1*halfHeight, i, halfHeight);
        line(-1*i, -1*halfHeight, -1*i, halfHeight);
    }
    //horizontal lines draw
    for (let i = 0; i < halfHeight; i += 20) {
        line(-1*halfWidth, i, halfWidth, i);
        line(-1*halfWidth, -1*i, halfWidth, -1*i);
    }
    noStroke();
    fill(255);
    //horizontal cordinates draw
    for (let i = 0; i < halfHeight; i += 100) {
        text(-1*i, 0, i);
        text(i, 0, -1*i);
    }
    //vertical cordinates draw
    for (let i = 0; i < canvasHeight; i += 100) {
        text(i, i, 0);
        text(-1*i, -1*i, 0);
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
  let usableFunction = String(function_I.value).replace('f(x)','').replace('=','').replaceAll('x', `${x}`).replace('²', '**2').replace('³', '**3')
  // .replace('√', 'Math.sqrt').replace('π', 'Math.PI').replace('e', 'Math.E').replace('sin', 'Math.sin').replace('cos', 'Math.cos').replace('tan', 'Math.tan').replace('log', 'Math.log').replace('ln', 'Math.log').replace('∛', 'Math.cbrt').replace('∜', 'Math.root');

  say(usableFunction);
  let xF;
  if(usableFunction != undefined)
    xF = eval(usableFunction);
  say(xF);
  if(xF != undefined)
    return xF;
  else return 0;
}

function zAjust(number){
  return number/zoomValue;
}

function zoomWeel(event) {
    if(zoomValue>0 && event.deltaY>0) zoomValue -= (event.deltaY/canvasHeight);
    if(zoomValue<8 && event.deltaY<0) zoomValue += ((event.deltaY/canvasHeight)*-1);
    // resizeCanvas((canvasWidth * zoomValue), canvasHeight * zoomValue);
    background(0);
    drawCartesianPlane();
}