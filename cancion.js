document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-music");
    let button = document.getElementById("play-music");
    
    button.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            button.style.backgroundColor = "#d9534f";
        } else {
            audio.pause();
            button.style.backgroundColor = "#4CAF50";
        }
    });
});