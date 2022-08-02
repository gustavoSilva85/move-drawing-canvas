const drawings = new Array();

function moving() {

  const { x, y } = coordinatesPointer;
  
  if(!activeClickPointer) {
    context.beginPath();

    return;
  }

  if(mode === "move") {
    updateFrame(x, y);
    return;
  }

  draw(x, y);

}


function draw(x, y) {

  context.lineWidth = 1.5;
  context.strokeStyle = "black";
  context.lineCap = "round";
  context.lineJoin = "round";
  
  const drawLine = async () => {
    context.translate(0, 0);
    context.lineTo(x, y);
    context.moveTo(x, y);
    context.stroke();
  }
  
  drawLine();
  drawings.push(drawLine);

}

async function updateFrame(x, y) {
  context.clearRect(0, 0, 700, 700);
  context.translate(0, 0);
  
  context.save();
  context.translate(x - (canvas.width / 2), y - (canvas.height / 2));
  context.drawImage(imageBackground, 0, 0, canvas.width, canvas.height);
  context.translate(1, 1);
  drawings.forEach(it => it());
  context.restore();

}

function restCanvas() {
  context.clearRect(0, 0, 700, 700);
  context.translate(0, 0);
  context.drawImage(imageBackground, 0, 0, canvas.width, canvas.height);
  drawings.forEach(it => it());
}