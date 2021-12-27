const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const imgDimensions = { width: 107, height: 155.5 };

const timeStart = Date.now();
const timeCount = document.querySelector(".time");
const timeBirth = new Date("July 13, 2013 00:00:00");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.translate(window.innerWidth / 2, window.innerHeight / 2);

const img = new Image();
img.src = "./static/trigger.png";

const loopCount = 50;
const offsetDistance = 70;
let currentOffset = 0;

img.onload = () => {
  reDraw();
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

function loopDraw() {
  for (let i = loopCount; i >= 1; i--) draw(i * offsetDistance + currentOffset);

  draw(offsetDistance);
  currentOffset++;

  if (currentOffset >= offsetDistance) {
    currentOffset = 0;
  }

  const timeTicker = (Date.now() - timeBirth) / 1000;
  timeCount.innerText = timeTicker;

  requestAnimationFrame(loopDraw);
}

function reDraw() {
  requestAnimationFrame(loopDraw);
}
