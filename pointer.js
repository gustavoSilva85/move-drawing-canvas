let activeClickPointer = false;
let coordinatesPointer = { 
  x: 0,
  y: 0
}

function downPointer() {
  activeClickPointer = true;
}

function upPointer() {
  activeClickPointer = false;
  drawings.push(async () => context.beginPath());
}

function movingMousePointer(e) {

  coordinatesPointer = getPointer(
    canvas, 
    { 
      clientX: e.clientX, 
      clientY: e.clientY 
    }
  );

  moving();

}

function movingTouchPointer(e) {

  coordinatesPointer = getPointer(
    canvas, 
    { 
      clientX: e.changedTouches[0].clientX, 
      clientY: e.changedTouches[0].clientY 
    }
  );

  moving();

}

function getPointer(canvas, { clientX, clientY}) {
  const rect = canvas.getBoundingClientRect();

  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}; 