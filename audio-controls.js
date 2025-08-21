// audio-controls.js

const audio = document.getElementById('myAudio');

function rewindAudio() {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
}

function fastForwardAudio() {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
}
