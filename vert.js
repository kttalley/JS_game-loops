let vCanvas = document.getElementById("vertCanvas");
let vWidth = vCanvas.width;
let vHeight = vCanvas.height;

let vCtx = vCanvas.getContext("2d");
vCtx.fillStyle = "rgba(255,0,255)";

let vState = {
    x: vWidth / 2,
    y: vHeight / 2 
}

function vUpdate(vProgress) {
    vState.y += vProgress;

    if(vState.y > vHeight) {
        vState.y -= vHeight;
    }
}

function vDraw() {
    vCtx.clearRect(0,0,vWidth, vHeight);
    vCtx.fillRect(vState.x - 5, vState.y - 5, 10, 10);
}

function vLoop(timestamp) {
    var vProgress = timestamp - vLastRender;

    vUpdate(vProgress/5);
    vDraw();

    vLastRender = timestamp;
    window.requestAnimationFrame(vLoop);
}

let vLastRender = 0;
window.requestAnimationFrame(vLoop);