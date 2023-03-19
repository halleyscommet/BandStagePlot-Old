function updateFullscreenButton() {
    var button = document.getElementById("fs-button");
    if (document.fullscreenElement) {
        button.textContent = "Exit Fullscreen";
    } else {
        button.textContent = "Fullscreen";
    }
}

document.addEventListener("fullscreenchange", updateFullscreenButton);

function toggleFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}