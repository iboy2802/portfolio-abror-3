// js/music.js
const music = new Audio('assets/audio/backsound.mp3');
music.loop = true;

document.addEventListener('DOMContentLoaded', () => {
  const musicBtn = document.getElementById('music-button');

  musicBtn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      musicBtn.innerText = "⏸️ Pause Musik";
    } else {
      music.pause();
      musicBtn.innerText = "▶️ Mainkan Musik";
    }
  });
});
