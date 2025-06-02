function setSpeed() {
  const video = document.querySelector('video');
  if (video) {
    console.log('Video found with playbackRate:', video.playbackRate);
  } else {
    setTimeout(setSpeed, 1000);
  }
}

setSpeed();
