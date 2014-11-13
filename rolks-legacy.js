(function() {
  var audio = new Audio();

  audio.src = 'http://radio.108.pl:8006/ambient.ogg';
  audio.controls = true;
  audio.autoplay = true;

  window.document.body.appendChild(audio);
}());
