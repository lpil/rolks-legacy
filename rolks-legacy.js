(function() {
  var player       = new Audio(),
      audioContext = new window.AudioContext(),
      analyser     = audioContext.createAnalyser(),
      source       = audioContext.createMediaElementSource(player),
      bufferLength = analyser.frequencyBinCount,
      dataArray    = new Uint8Array(bufferLength),
      average;

  average = function average(array) {
    var i = array.length,
        sum = 0;

    while (i--) {
      sum = sum + array[i];
    }
    return sum / array.length;
  };


  // Start audio source
  player.src = 'http://radio.108.pl:8006/ambient.ogg';
  player.controls = true;
  player.autoplay = true;
  window.document.body.appendChild(player);

  // Routing
  source.connect(analyser);
  source.connect(audioContext.destination);

  // Transform config
  analyser.fftSize = 2048;


  // Perform FFT on audio, split into 8 bands, print values
  setInterval(function() {
    var i,
        l,
        chunk = 64,
        bands = [];

    analyser.getByteFrequencyData(dataArray);

    for (i = 0, l = dataArray.length; i < l; i += chunk) {
      bands.push(Math.floor(average(dataArray.subarray(i, i + chunk))));
    }
    console.log(bands);
  }, 100 );

}());
