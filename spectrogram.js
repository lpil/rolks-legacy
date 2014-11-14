(function() {
  var rolk,
      i,
      width,
      height,
      freqData,
      canvas   = document.querySelector('canvas'),
      ctx      = canvas.getContext('2d');

  window.rolk = window.rolk || {};
  rolk = window.rolk;

  ctx.strokeStyle = '#000';

  setInterval(function() {
    freqData = rolk.getFreqData();

    height        = 256;
    width         = freqData.length;
    canvas.height = height;
    canvas.width  = width;

    i = freqData.length;
    while (i--) {
      ctx.moveTo(i + 0.5, height - 0.5);
      ctx.lineTo(i + 0.5, height - 0.5 - freqData[i]);
      ctx.stroke();
    }
  }, 50);
}());
