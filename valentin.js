document.addEventListener('DOMContentLoaded', () => {
    fetch("./love.svg")
      .then((response) => response.text())
      .then((svg) => {
        const playerContainer = document.getElementById("player-container");
        playerContainer.innerHTML = svg;

        const love = document.querySelector("svg");
        const playButton = document.getElementById("play-button");
        const audio = document.getElementById("love-song");
        let isPlaying = false;

        playButton.addEventListener("click", () => {
          if (!isPlaying) {
            love.style.animation = "spin 2s linear infinite";

            audio.play();

            playButton.textContent = "Pause";
            isPlaying = true;
          } else {
            love.style.animation = "";

            audio.pause();

            playButton.textContent = "Play";
            isPlaying = false;
          }
        });
      })
      .catch((err) => console.error("Error loading SVG:", err));
});