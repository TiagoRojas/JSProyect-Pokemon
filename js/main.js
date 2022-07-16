function run() {
  document.body.innerHTML = '<video src="assets/videos/gameintro.mp4" width="960" height="640" autoplay="auto" loop id="video" onclick="skipintro()"></video>';
  const video = document.getElementById("video")
  video.volume = 0.2
  video.addEventListener("timeupdate", function() {
    if (this.currentTime >= 7.5) {
      video.setAttribute("onClick", "startgame()");
    }
  });
}

function skipintro() {
  const video = document.getElementById("video");
  const videotime = video.currentTime
  if (videotime > 7.5) {
    video.currentTime = 20.5;
    video.setAttribute("onClick", "startgame()");
  }
}

function startgame() {
  const video = document.getElementById("video");
  const videotime = video.currentTime
  if (videotime > 20.5) {
    video.remove()
  } else {
    video.currentTime = 20.5;
  }
}




let numero1 = 2
let numero2 = 3

if (numero1 > numero2) {
  console.log("yes")
} else {
  console.log("no")
}