
var function_V = one(".V_function");
var function_I = one(".I_function");

ear("mousemove", mousemove);

function mousemove(e) {
    let cursor = {x: e.clientX, y: e.clientY};
    function_V.style.top = (cursor.y - 50) + "px";
    function_V.style.left = (cursor.x + 20) + "px";
}

function_I.addEventListener("input", function () {
    let baskValues = function_I.value.split(",");
    let {x,y,z} = {x: parseInt(baskValues[0]), y: baskValues[1], z: baskValues[2]};
    if(baskValues.length > 3){
        let baskResult = bascara(x, y, z);
        say(baskResult);
    }
});