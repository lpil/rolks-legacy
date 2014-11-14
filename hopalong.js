// (function() {
  var i,
      canvas = document.querySelector('canvas'),
      ctx    = canvas.getContext('2d'),
      width  = 500,
      height = 500,
      canvasData,
      hopalongX,
      hopalongY,
      a = 114,
      b = 110.9,
      c = 1111,
      x = 0,
      y = 0;
  
  hopalongX = function hopalongX(x, y) {
    var signX = x > 0 ? 1 : -1,
        z = signX * Math.sqrt(Math.abs(b * x - c));

    if (x > 0) { return y - z; }
    else       { return y + z; }
  };

  hopalongY = function hopalongY(x) {
    return a - x;
  };


  canvas.width  = width;
  canvas.height = height,
  canvasData = ctx.getImageData(0, 0, width, height);

  i = 10000;
  while (i--) {
    x = hopalongX(x, y);
    y = hopalongY(x);
    console.log(x + width / 2, y + height / 2);
    ctx.fillRect(x + width / 2, y + height / 2, 1, 1);
  }
// }());
