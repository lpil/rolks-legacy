(function() {
  var player       = new Audio(),
      audioContext = new AudioContext(),
      analyser     = audioContext.createAnalyser(),
      source       = audioContext.createMediaElementSource(player);

  player.src = 'http://radio.108.pl:8006/ambient.ogg';
  player.controls = true;
  player.autoplay = true;
  window.document.body.appendChild(player);

  source.connect(analyser);
  source.connect(audioContext.destination);
}());
