(function() {
  var i,
      canvas = document.querySelector('canvas'),
      ctx    = canvas.getContext('2d'),
      width  = 1200,
      height = 1200,
      a  = 0.4,
      b  = 0.1,
      c  = 0.3,
      x  = 0,
      y  = 0,
      xx = 0,
      yy = 0;
  
  canvas.width  = width;
  canvas.height = height,

  i = 350000;
  while (i--) {
    ctx.fillRect(x*130 + width / 2, y*130 + height / 2, 1, 1);

    xx = y - (x > 0 ? 1 : -1) * Math.sqrt(Math.abs(b * x - c));
    yy = a - x;
    x  = xx;
    y  = yy;
  }
}());
