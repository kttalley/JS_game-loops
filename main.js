
var canvas = document.getElementById("canvas");
var width = canvas.width;
var height = canvas.height;
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";

var state = {
    x: width / 2,
    y: height / 2
}

function update(progress) {
    state.x += progress;

    if(state.x > width) {
        state.x -= width;
    }
}

function draw() {
    ctx.clearRect(0,0,width, height);
    ctx.fillRect(state.x - 5, state.y - 5, 10, 10);
}

function loop(timestamp) {
    var progress = timestamp - lastRender;

    update(progress/5);
    draw();

    lastRender = timestamp;
    window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);


