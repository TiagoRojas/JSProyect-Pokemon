const player1 = prompt("Cual es tu nombre de jugador?")
const Player = [{
  nombre: player1,
  pokemonDescubiertos: 0,
  medallasObtenidas: 0
}]
const atacks = [{
  Abocajarro: 300,
  latigoCepa: 20,
  Placaje: 3,
}]
const pokemon1 = [{
  nombre: "Ratata",
  nivel: 1,
  hp: 20,
  mp: 10,
  defense: 14,
  ataques: atacks,
}]
console.log(Player)
console.log(atacks)
console.log(pokemon1)

function run() {
  const gamezone = document.getElementById("gamespace")
  const video = '<video src="assets/videos/gameintro.mp4" width="960" height="640" autoplay="auto" loop id="video" onclick="skipintro()"></video>'
  gamezone.innerHTML = video
  const videoplaying = document.getElementById("video")
  videoplaying.volume = 0.2
  videoplaying.addEventListener("timeupdate", function() {
    if (this.currentTime >= 7.5) {
      videoplaying.setAttribute("onClick", "startgame()");
    }
  });
}

function skipintro() {
  const video = document.getElementById("video");
  const videotime = video.currentTime
  if (videotime < 7.5) {
    video.currentTime = 20.5;
    video.setAttribute("onClick", "startgame()");
  }
}
// const a = document.createElement('img')
// canvas.appendChild(a)
// a.src = "../assets/sprites/pokemon/19.png"
// a.id = "introPokemon2"
// const ba = document.getElementById("introPokemon2").src
// console.log(ba)

function startgame() {
  const video = document.getElementById("video");
  const videotime = video.currentTime
  const gamezone = document.getElementById("gamespace")
  if (videotime > 20.5) {
    video.remove()
    gamezone.innerHTML = '<canvas style="width: 100%; height: 100%;" id="canvas"></canvas>', '<img src="../assets/sprites/pokemon/29.png" id="introPokemon1" style="position: absolute; top: -10000px;">';
    const canvas = document.getElementById('canvas')
    canvas.innerHTML = '<img src="../assets/sprites/pokemon/29.png" id="introPokemon1" style="position: absolute; top: -10000px;">'
    const ctx = canvas.getContext("2d")
    const introPokemon = document.getElementById('introPokemon1').src
    ctx.drawImage(img, 100, 100);
  } else {
    video.currentTime = 20.5;
  }
}
window.addEventListener('keydown', ({
  keyCode
}) => {
  switch (keyCode) {
    case 65:
      console.log('a')
      break;
    case 83:
      console.log('s')
      break;
    case 68:
      console.log('d')
      break;
    case 87:
      console.log('w')
      break;
  }
})