const startScreen = document.getElementById("start-screen");
const pressStart = document.getElementById("press-start");
const video = document.getElementById("video");
const music = document.getElementById("bg-music");

function iniciar() {
  startScreen.style.display = "none";

    video.style.display = "block";

    video.play().catch(err => console.log("Erro vídeo:", err));
  music.play().catch(err => console.log("Erro áudio:", err));
}

pressStart.addEventListener("click", iniciar);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    iniciar();
  }
});
