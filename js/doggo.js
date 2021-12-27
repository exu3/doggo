const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const imgDimensions = { width: 107, height: 155.5 };

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.translate(window.innerWidth / 2, window.innerHeight / 2);

const img = new Image();
img.src = "./static/trigger.png";

img.onload = () => {
  draw();
};

function draw(offset) {
  console.log("draw " + img);
  ctx.drawImage(
    img,
    -imgDimensions.width / 2 - offset / 2,
    -imgDimensions.height / 2 - offset / 2,
    imgDimensions.width + offset,
    imgDimensions.height + offset
  );
}
draw(2);
const loopCount = 30;

function loopDraw() {
  for (let i = loopCount; i >= 0; i--) {
    draw(i);
  }
}
