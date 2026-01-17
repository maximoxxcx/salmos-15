const const startBtn = document.getElementById("press-start");
 = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const video = document.getElementById("video");
const music = document.getElementById("bg-music");

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  video.style.display = "block";

  music.volume = 0.4;
  music.play();
  video.play();
});