// mouse
canvas.addEventListener("mousedown", downPointer);
canvas.addEventListener("mouseup", upPointer);
canvas.addEventListener("mousemove", movingMousePointer);

// touch
canvas.addEventListener("touchstart", downPointer);
canvas.addEventListener("touchend", upPointer);
canvas.addEventListener("touchmove", movingTouchPointer);

alterModeButton.addEventListener("click", () => {
  if(mode === "move") {
    alterMode.innerHTML = "Draw Mode";
    canvas.style.cursor = "crosshair";
    mode = "draw";
  } else {
    alterMode.innerHTML = "Move Mode";
    canvas.style.cursor = "default";
    mode = "move";
  }
})

restButton.addEventListener("click", restCanvas);