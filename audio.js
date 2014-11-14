(function() {
  var player       = new Audio(),
      audioContext = new window.AudioContext(),
      analyser     = audioContext.createAnalyser(),
      source       = audioContext.createMediaElementSource(player),
      bufferLength = analyser.frequencyBinCount,
      dataArray    = new Uint8Array(bufferLength),
      average,
      rolk;

  window.rolk = window.rolk || {};
  rolk = window.rolk;

  average = function average(array) {
    var i = array.length,
        sum = 0;

    while (i--) {
      sum = sum + array[i];
    }
    return sum / array.length;
  };


  rolk.getFreqData = function getFreqData() {
    analyser.getByteFrequencyData(dataArray);
    return dataArray;
  };


  rolk.getBands = function getBands(numBands) {
    var i, l,
        band,
        chunk = Math.floor(dataArray.length / numBands),
        bands = [];
    analyser.getByteFrequencyData(dataArray);

    for (i = 0, l = dataArray.length; i < l; i += chunk) {
      band = average(dataArray.subarray(i, i + chunk));
      bands.push(Math.floor(band));
    }
    return bands;
  };


  rolk.setAudioSource = function setAudioSource(url) {
    player.src = url;
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
}());
