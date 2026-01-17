const startScreen = document.getElementById("start-screen");
const pressStart = document.getElementById("press-start");
const video = document.getElementById("video");
const music = document.getElementById("bg-music");

function iniciar() {
  // esconder tela inicial
  startScreen.style.display = "none";

  // mostrar vídeo
  video.style.display = "block";

  // tocar vídeo e música
  video.play().catch(err => console.log("Erro vídeo:", err));
  music.play().catch(err => console.log("Erro áudio:", err));
}

// clique
pressStart.addEventListener("click", iniciar);

// teclado (enter ou espaço)
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    iniciar();
  }
});
