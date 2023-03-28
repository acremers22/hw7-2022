

let videoPlayer; 

window.addEventListener("load", function() {
	console.log("Good job opening the window");
  videoPlayer = document.getElementById("player1");
  videoPlayer.autoplay = false;
  videoPlayer.loop = false;
});


//TO-DO: Volume update not working
// Update Volume Information
function updateVolume() {
	const volumeDisplay = document.getElementById("volume");
	volumeDisplay.innerText = `${Math.round(videoPlayer.volume * 100)}%`;
}

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	videoPlayer.play();
	updateVolume();
});


// Pause Button
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
  videoPlayer.pause();
});

// Slow Down
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow Video");
	videoPlayer.playbackRate -= 0.1;
  console.log(`New speed: ${videoPlayer.playbackRate}`);
});

// Speed Up
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed Up Video");
  videoPlayer.playbackRate += (videoPlayer.playbackRate * 0.1);
  console.log(`New speed: ${videoPlayer.playbackRate}`);
});

document.getElementById('skip').addEventListener("click", function() {
  videoPlayer.currentTime += 10;
  if (videoPlayer.currentTime > videoPlayer.duration) {
    videoPlayer.currentTime = 0;
  }
  console.log(`Current location: ${videoPlayer.currentTime}`);
});

// Mute Button
muteButton = document.getElementById('mute')
muteButton.addEventListener("click", function() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    muteButton.innerText = 'Mute';
  } else {
    videoPlayer.muted = true;
    muteButton.innerText = 'Unmute';
  }
});

// Volume Slider
volumeSlider = document.getElementById("slider")
volumeSlider.addEventListener("input", function() {
  videoPlayer.volume = volumeSlider.value / 100;
  updateVolume();
});


// Old School
document.getElementById("vintage").addEventListener("click", function() {
  videoPlayer.classList.add('oldSchool');
});

// Original
document.getElementById("orig").addEventListener("click", function() {
  videoPlayer.classList.remove('oldSchool');
});