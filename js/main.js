// const player1 = prompt("Cual es tu nombre de jugador?")
// const Player = [{
//   nombre: player1,
//   pokemonDescubiertos: 0,
//   medallasObtenidas: 0
// }]
// const atacks = [{
//   Abocajarro: 300,
//   latigoCepa: 20,
//   Placaje: 3,
// }]
// const pokemon1 = [{
//   nombre: "Ratata",
//   nivel: 1,
//   hp: 20,
//   mp: 10,
//   defense: 14,
//   ataques: atacks,
// }]
// console.log(Player)
// console.log(atacks)
// console.log(pokemon1)

function run() {
  const gamezone = document.getElementById("gamespace")
  const video = '<video src="assets/videos/gameintro.mp4" width="960" height="640" autoplay="auto" loop id="video" onclick="skipintro()"></video>'
  gamezone.innerHTML = video
  const videoplaying = document.getElementById("video")
  videoplaying.volume = 0.2
  videoplaying.addEventListener("timeupdate", function() {
    if (this.currentTime > 7.5) {
      videoplaying.setAttribute("onClick", "startgame()");
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

// Esto es el "template" para crear un pokemon y añadirlo a el html

// const a = document.createElement('img')
// canvas.appendChild(a)
// a.src = "../assets/sprites/pokemon/19.png"
// a.id = "introPokemon2"
// const ba = document.getElementById("introPokemon2").src
// console.log(ba)
// canvas.innerHTML = '<img src="../assets/sprites/pokemon/29.png" id="introPokemon1" style="position: absolute; top: -10000px;">'

let numberText = 0

function startgame() {
  const video = document.getElementById("video");
  const videotime = video.currentTime
  const gamezone = document.getElementById("gamespace")
  if (videotime >= 20.5) {
    video.remove()
    gamezone.innerHTML = '<canvas id="canvas"></canvas>';

    const introMusic = new Audio("./assets/sprites/oak/introductionMusic.mp3")
    introMusic.play()
    introMusic.loop
    introMusic.currentTime = 2
    introMusic.volume = 0.1

    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext("2d")
    canvas.width = 960;
    canvas.height = 640;

    const bg = new Image()
    const ground = new Image()
    const oak = new Image();

    CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      this.beginPath();
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      this.closePath();
      return this;
    }
    bg.src = "./assets/sprites/oak/bg.png";
    bg.onload = function() {
      ctx.drawImage(bg, 0, 0, 960, 640)
    };
    ground.src = "./assets/sprites/oak/groundintro.png";
    ground.onload = function() {
      ctx.drawImage(ground, 225, 325, 500, 250)
    };
    oak.src = "./assets/sprites/oak/intro.png";
    oak.onload = function() {
      ctx.drawImage(oak, 400, 100, 240, 380);
    };

    const containerGenerator = document.createElement("div");
    gamezone.append(containerGenerator);
    containerGenerator.id = "containerText";
    const containerText = document.getElementById("containerText")
    const textCreation = document.createElement("p");
    containerText.append(textCreation);

    const frame = document.createElement("img")
    containerText.appendChild(frame)
    frame.src = './assets/sprites/oak/frame.png'
    frame.classList.add("frame")
    frame.id = "canvas"
    frame.width = 920
    frame.height = 160

    textCreation.id = "text";
    textCreation.classList.add("text");
    const text = document.getElementById("text");
    text.setAttribute("onselectstart", "return false");


    // "Pero primero dime cómo te llamas.",
    // "¡Bien! ¡Así que te llamas"

    let textwriter = new Typewriter(text, {
      autoStart: true,
    });
    textwriter.typeString("¡Hola! ¡Éste es el mundo de Pokémon!")
      .pauseFor(1000)
      .deleteAll()
      .typeString("¡Me llamo Oak!")
      .pauseFor(1000)
      .deleteAll()
      .typeString("¡Pero la gente me llama Profesor Pokémon!")
      .pauseFor(1000)
      .deleteAll()
      .typeString("¡Este mundo está habitado por unas criaturas llamadas Pokémon!")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Para algunos, los Pokémon son mascotas. Pero otros los usan para pelear.")
      .pauseFor(1000)
      .deleteAll()
      .typeString("En cuanto a mí...")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Estudio a los Pokémon como profesión.")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Bueno, cuéntame algo de ti. ¿Eres chico o chica?")
      .pauseFor(1000)
      .deleteAll()
      .start();



    // gamezone.setAttribute("onClick", "changeText()");
    // let test = numberText
    // text.textContent = oakText[0];
    // console.log(test)



    const arrowCreation = document.createElement("img")
    text.appendChild(arrowCreation)
    arrowCreation.src = './assets/sprites/oak/arrow.png'
    arrowCreation.classList.add("Typewriter__cursor")
    arrowCreation.width = 30
    arrowCreation.height = 20
  } else if (videotime < 20.5) {
    video.currentTime = 20.5
  }
}

// function changeText() {
//   const div = document.getElementById("gamespace")
//   const canvas = document.getElementById("canvas")
//   const ctx = canvas.getContext("2d")
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = "#a0d0e0"
//   ctx.roundRect(20, 450, 920, 160, 40).fill();
//   ctx.fillStyle = "#f8f8f8"
//   ctx.roundRect(30, 460, 900, 140, 30).fill();

// const oakText = [
//   "¡Hola! ¡Éste es el mundo de Pokémon!",
//   "¡Me llamo Oak!",
//   "¡Pero la gente me llama Profesor Pokémon!",
//   "¡Este mundo está habitado por unas criaturas llamadas Pokémon!",
//   "Para algunos, los Pokémon son mascotas. Pero otros los",
//   "usan para pelear.",
//   "En cuanto a mí...",
//   "Estudio a los Pokémon como profesión.",
//   "Bueno, cuéntame algo de ti. ¿Eres chico o chica?",
//   "Pero primero dime cómo te llamas.",
//   "¡Bien! ¡Así que te llamas"
// ]
//   const text = document.getElementById("text");

// }
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