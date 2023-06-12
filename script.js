document.addEventListener("DOMContentLoaded", function() {
  const app = document.getElementById("app");
  const videoContainer = document.querySelector(".vid-container");
  const video = document.getElementById("video");
  const audio = document.getElementById("audio");
  const soundButtons = document.querySelectorAll(".sound-picker button");
  const timeButtons = document.querySelectorAll("#time-select button");
  const timeDisplay = document.querySelector(".time-display");
  const playButton = document.querySelector(".play");

  let selectedSound = "sounds/beach.mp3";
  let selectedVideo = "video/beach.mp4";
  let meditationTime = 10 * 60; // Default time: 10 minutes
  let intervalId;

  // Video and audio setup
  video.src = selectedVideo;
  audio.src = selectedSound;

  // Sound selection
  soundButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      soundButtons.forEach(function(btn) {
        btn.classList.remove("selected");
      });
      this.classList.add("selected");
      selectedSound = this.id === "sound1" ? "sounds/beach.mp3" : "sounds/rain.mp3";
      audio.src = selectedSound;
    });
  });

  // Time selection
  timeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      timeButtons.forEach(function(btn) {
        btn.classList.remove("selected");
      });
      this.classList.add("selected");
      meditationTime = parseInt(this.id.replace("mins", "")) * 60;
      updateTimeDisplay(meditationTime);
    });
  });

  // Play/pause button
  playButton.addEventListener("click", function() {
    if (app.classList.contains("playing")) {
      pauseMeditation();
    } else {
      startMeditation();
    }
  });

  function startMeditation() {
    app.classList.add("playing");
    playButton.textContent = "Pause";
    videoContainer.style.display = "block";
    audio.play();
    video.play();

    intervalId = setInterval(function() {
      meditationTime--;
      updateTimeDisplay(meditationTime);

      if (meditationTime <= 0) {
        pauseMeditation();
        updateTimeDisplay(0);
      }
    }, 1000);
  }

  function pauseMeditation() {
    app.classList.remove("playing");
    playButton.textContent = "Play";
    videoContainer.style.display = "none";
    audio.pause();
    video.pause();
    clearInterval(intervalId);
  }

  function updateTimeDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
});
