const canvas = document.querySelector("#canvas");
let mode = "draw";

canvas.width = 700;
canvas.height = 700;

const context = canvas.getContext("2d");

const imageBackground = new Image();
imageBackground.src = "./background.jpg";
imageBackground.onload = () => {
  context.drawImage(imageBackground, 0, 0, canvas.width, canvas.height);
}