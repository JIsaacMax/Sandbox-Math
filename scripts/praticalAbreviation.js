function say (object){
    console.log(object);
}

function one(String){
    return document.querySelector(String);
}

function many(String){
    return document.querySelectorAll(String);
}

function ear(String, Function){
    return document.addEventListener(String, Function);
}

function randRGB(){
    return Math.floor(Math.random() * 256)
}