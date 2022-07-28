document.getElementById("start").addEventListener("click", run)

function run() {
  const gamezone = document.getElementById("gamespace")
  const video = '<video src="assets/videos/gameintro.mp4" width="960" height="640" autoplay="auto" loop id="video"></video>'
  gamezone.innerHTML = video
  const videoplaying = document.getElementById("video")
  videoplaying.volume = 0.2
  videoplaying.addEventListener("timeupdate", function() {
    if (this.currentTime > 7.5) {
      videoplaying.addEventListener("click", startgame);
    }
  });
}

function skipintro() {
  const video = document.getElementById("video");
  const videotime = video.currentTime
  if (videotime > 7.5) {
    video.currentTime = 20.5;
    video.addEventListener("click", startgame);
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


function startgame() {
  const video = document.getElementById("video");
  const videotime = video.currentTime
  const gamezone = document.getElementById("gamespace")
  if (videotime >= 20.5) {
    video.remove()
    gamezone.innerHTML = '<canvas id="canvas"></canvas>';

    const introMusic = new Audio("./assets/sprites/oak/introductionMusic.mp3")
    introMusic.play()
    introMusic.loop = true
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

    const arrowCreation = document.createElement("img")
    text.appendChild(arrowCreation)
    arrowCreation.src = './assets/sprites/oak/arrow.png'
    arrowCreation.classList.add("Typewriter__cursor")
    arrowCreation.width = 30
    arrowCreation.height = 20

    // "Pero primero dime cómo te llamas.",
    // "¡Bien! ¡Así que te llamas"

    let textwriter = new Typewriter(text, {
      autoStart: true,
    });
    textwriter.typeString("¡Hola! ¡Éste es el mundo de Pokémon!")
      .pauseFor(10)
      // .deleteAll()
      // .typeString("¡Me llamo Oak!")
      // .pauseFor(1000)
      // .deleteAll()
      // .typeString("¡Pero la gente me llama Profesor Pokémon!")
      // .pauseFor(1000)
      // .deleteAll()
      // .typeString("¡Este mundo está habitado por unas criaturas llamadas Pokémon!")
      // .pauseFor(1000)
      // .deleteAll()
      // .typeString("Para algunos, los Pokémon son mascotas. Pero otros los usan para pelear.")
      // .pauseFor(1000)
      // .deleteAll()
      // .typeString("En cuanto a mí...")
      // .pauseFor(1000)
      // .deleteAll()
      // .typeString("Estudio a los Pokémon como profesión.")
      // .pauseFor(1000)
      .deleteAll()
      .typeString("Bueno, cuéntame algo de ti. ¿Eres chico o chica?")
      .callFunction(AskGen)
      .start();

    function AskGen() {
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext("2d")
      canvas.width = 960;
      canvas.height = 640;

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

      ctx.drawImage(bg, 0, 0, 960, 640)
      ctx.drawImage(ground, 225, 325, 500, 250)
      ctx.drawImage(oak, 400, 100, 240, 380);

      ctx.fillStyle = "#a0d0e0";
      ctx.roundRect(625, 325, 200, 100, 10).fill();
      ctx.fillStyle = "#f8f8f8";
      ctx.roundRect(630, 330, 190, 90, 10).fill();
      ctx.fillStyle = "#000000";
      ctx.font = "20px 'Press Start 2P'";
      ctx.fillText("Chico", 660, 370, 500);
      ctx.fillStyle = "#000000";
      ctx.font = "20px 'Press Start 2P'";
      ctx.fillText("Chica", 660, 400);

      const arrowRight = document.createElement("img");
      containerText.appendChild(arrowRight);
      arrowRight.src = './assets/sprites/oak/arrowRight.png';
      arrowRight.classList.add("arrowRight");
      arrowRight.classList.add("Typewriter__cursor");
      arrowRight.id = "arrowRight";
      arrowRight.width = 20;
      arrowRight.height = 20;

      test1 = 0
      window.addEventListener('keydown', (event) => {
        const arrowSelect = document.getElementById("arrowRight");
        let key = event.key;
        let arrowPosition = document.getElementById("arrowRight").style.top
        // console.log(key)
        if (key === "s" && test1 === 0) {
          arrowRight.setAttribute("style", "top: -80px")
          test1 = "si";
        } else if (key === "s" && test1 === "si" && arrowPosition === "-110px") {
          arrowRight.setAttribute("style", "top: -80px")
        } else if (key === "s" && test1 === "si") {
          arrowRight.setAttribute("style", "top: -110px")
          test1 = 0;
        } else if (key === "s" && test == 0) {}
        if (key === "w" && test1 === 0) {
          arrowRight.setAttribute("style", "top: -80px");
          test = "si";
        } else if (key === "w" && test1 === "si") {
          arrowRight.setAttribute("style", "top: -110px");
          test = 0;
        } else if (key === "w" && test1 === "si" && arrowPosition === "-110px") {
          arrowRight.setAttribute("style", "top: -80px");
        } else if (key === "w" && test1 === 0 && arrowPosition === "-80px") {
          arrowRight.setAttribute("style", "top: -110px");
        }
        if (key === "j") {
          console.log(test1)
          console.log(arrowPosition)
        }
      })
    }

  } else if (videotime < 20.5) {
    video.currentTime = 20.5
  }
}

// window.addEventListener('keydown', (event) => {
//   let key = event.key
//   if (key === "a") {
//     console.log("a")
//   } else if (key === "w") {
//     console.log("w")
//   } else if (key === "s") {
//     console.log("s")
//   } else if (key === "d") {
//     console.log("d")
//   }
// })