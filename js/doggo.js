const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const imgDimensions = { width: 107, height: 155.5 };

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.translate(window.innerWidth / 2, window.innerHeight / 2);

const img = new Image();
img.src = "./static/trigger.png";

img.onload = () => {
  draw();
};

function draw() {
  context.drawImage(
    img,
    -imgDimensions.width / 2,
    -imgDimensions.height / 2,
    imgDimensions.width,
    imgDimensions.height
  );
}
