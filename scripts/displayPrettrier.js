
var function_V = one(".V_function");
var function_I = one(".I_function");

ear("mousemove", mousemove);

function mousemove(e) {
    let cursor = {x: e.clientX, y: e.clientY};
    function_V.style.top = (cursor.y - 50) + "px";
    function_V.style.left = (cursor.x + 20) + "px";
}

function_I.addEventListener("input", function () {
    functionVector.forEach(() => functionVector.pop());
    var xValue = 0;
    do{
    var yValue = personalFunction(xValue);
    functionVector.push({x: xValue, y: (yValue)});
    say(`x: ${xValue} y: ${yValue}`);
    xValue+=1;
    }while(yValue < halfHeight);
});