const cvs = document.getElementById("gameScreen");
const ctx = cvs.getContext("2d");

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawText(text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = "75px Ariel";
  ctx.fillText(text, x, y);
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}

let rectx = 0;
function render() {
  drawRect(0, 0, 800, 600, "black");
  drawRect(rectx, 100, 100, 100, "red");
  rectx = rectx + 100;
}

setInterval(render, 100);

const user = {
  x: 0,
  y: cvs.height / 2 - 100 / 2,
  width: 10,
  height: 100,
  color: "white",
  score: 0
};

const comp = {
  x: cvs.width - 10,
  y: cvs.height / 2 - 10 / 2,
  width: 10,
  height: 100,
  color: "white",
  score: 0
};

function fillings() {}
