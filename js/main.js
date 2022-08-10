document.getElementById("start").addEventListener("click", run)


const gamezone = document.getElementById("gamespace")
const textBoxName = document.createElement("p");
textBoxName.id = "nameText"

const playerNameSelection = textBoxName

let selectorX = 125
let selectorY = 320

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ",", ".", " "]


const playerInfo = {
  playerName: "",
  pokemonObtained: 0,
  pokemonSeen: 0,
}



function run() {
  const gamezone = document.getElementById("gamespace")
  const video = document.createElement("video")
  video.id = "video"
  video.setAttribute("src", "assets/videos/gameintro.mp4")
  video.setAttribute("autoplay", "auto")
  video.setAttribute("width", "960")
  video.setAttribute("height", "640")
  // video.setAttribute("loop", "true")
  const titleStart = document.getElementById("start")
  titleStart.remove()
  gamezone.append(video)
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
  } else if (videotime > 87) {
    videotime = 7.5
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


let nameTextLength = playerNameSelection.textContent.length

function startgame() {
  const video = document.getElementById("video");
  const videotime = video.currentTime
  if (videotime >= 20.5) {
    video.remove()
    // gamezone.innerHTML = '<canvas id="canvas"></canvas>';
    const canvasCreate = document.createElement("canvas")
    canvasCreate.id = "canvas"
    gamezone.append(canvasCreate)

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
    bg.src = "./assets/sprites/oak/bg.png";

    const ground = new Image()
    ground.src = "./assets/sprites/oak/groundintro.png";

    const oak = new Image();
    oak.src = "./assets/sprites/oak/intro.png";


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

    bg.onload = () => {
      ctx.drawImage(bg, 0, 0, 960, 640)
    };
    oak.onload = () => {
      ctx.drawImage(ground, 225, 325, 500, 250)
      ctx.drawImage(oak, 400, 100, 240, 380);
    }

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
    frame.id = "frame"
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
      .callFunction(AskGen)
      .start();

    function AskGen() {
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

      let InitialPosition = "-110px"
      let keyFunction = (event) => {
        let key = event.key;
        let arrowPosition = document.getElementById("arrowRight").style.top
        if (key === "s" && InitialPosition === "-110px") {
          InitialPosition = ""
          arrowRight.setAttribute("style", "top: -80px")
        } else if (key === "s" && arrowPosition === "-80px") {
          arrowRight.setAttribute("style", "top: -110px")
        } else if (key === "s" && arrowPosition === "-110px") {
          arrowRight.setAttribute("style", "top: -80px")
        }
        if (key === "w" && InitialPosition === "-110px") {
          arrowRight.setAttribute("style", "top: -80px");
          InitialPosition = ""
        } else if (key === "w" && arrowPosition === "-80px") {
          arrowRight.setAttribute("style", "top: -110px");
        } else if (key === "w" && arrowPosition === "-110px") {
          arrowRight.setAttribute("style", "top: -80px");
        }
        if (key === "Enter" && InitialPosition === "-110px" || key === "Enter" && arrowPosition === "-110px") {
          const arrowRight1 = document.getElementById("arrowRight")
          arrowRight1.remove()
          window.removeEventListener('keydown', keyFunction)
          genderSelectedM()
        } else if (key === "Enter" && arrowPosition === "-80px") {
          const arrowRight1 = document.getElementById("arrowRight")
          arrowRight1.remove()
          window.removeEventListener('keydown', keyFunction)
          genderSelectedF()
        }
      }
      window.addEventListener('keydown', keyFunction)
    }

    // function genderSelectedM() {
    //   textwriter.deleteAll()
    //   textwriter.start()
    //   ctx.clearRect(0, 0, canvas.width, canvas.height)
    //   ctx.drawImage(bg, 0, 0, 960, 640)
    //   ctx.drawImage(ground, 225, 325, 500, 250)
    //   textwriter.typeString("Pero primero dime cómo te llamas.")
    //   ctx.clearRect(0, 0, canvas.width, canvas.height)
    //   test()
    // }

    function genderSelectedF() {

      const femaleCharacter = new Image()
      femaleCharacter.src = './assets/sprites/characters/female/intro-femalestanding-big.png'

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(bg, 0, 0, 960, 640)
      ctx.drawImage(ground, 225, 325, 500, 250)
      femaleCharacter.onload = () => {
        ctx.drawImage(femaleCharacter, 340, 100, 400, 400);
      };

      textwriter.deleteAll()
      textwriter.typeString("Pero primero dime cómo te llamas.")
      textwriter.callFunction(test)
      textwriter.start()
    }

    function test() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      document.getElementById("containerText").remove()
      window.addEventListener("keydown", test1)
      gamezone.append(textBoxName);
      askNameF()
    }

    let indice = 0
    let indice2 = 0
    const askNameBg = new Image()
    askNameBg.src = './assets/sprites/name-selection/nameSelection-bg.png'
    const groundIntro = new Image()
    groundIntro.src = "./assets/sprites/name-selection/ground-introNameS.png"
    const femaleCharacterIntro = new Image()
    femaleCharacterIntro.src = "./assets/sprites/characters/female/female-intro.png"
    const selectorIntro = new Image()
    selectorIntro.src = "./assets/sprites/name-selection/selector-intro.png"
    const selectorIntroWide = new Image()
    selectorIntroWide.src = "./assets/sprites/name-selection/selector-introWide.png"

    function askNameF() {

      const selectorWidth = selectorIntro.width / 4;
      const imgWidth = femaleCharacterIntro.width / 4;
      const selectorWideWidth = selectorIntroWide.width / 10

      ctx.drawImage(askNameBg, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(groundIntro, 168, 135, 86, 106)
      ctx.drawImage(femaleCharacterIntro, indice * imgWidth, 0, imgWidth, 100, 185, 130, 55, 90)
      if (selectorX < 650) {
        ctx.drawImage(selectorIntro, indice * selectorWidth, 0, selectorWidth, 115, selectorX, selectorY, 50, 100)
      } else if (selectorX > 650) {
        ctx.drawImage(selectorIntroWide, indice2 * selectorWideWidth, 0, selectorWideWidth, 115, selectorX, selectorY, 130, 120)
      }
      if (indice < 3) {
        indice++
      } else {
        indice = 0
      }
      if (indice2 < 9) {
        indice2++
      } else {
        indice2 = 0
      }
      setTimeout(askNameF, 170);
    }


  } else if (videotime < 20.5) {
    video.currentTime = 20.5
  }
}

let test1 = (event) => {
  nameTextLength = playerNameSelection.textContent.length
  let key = event.key

  if (key === "d" && selectorX < 490) {
    selectorX += 48
  } else if (key === "d" && selectorX == 493 && selectorY < 400) {
    selectorX = 620
  } else if (key === "d" && selectorX == 620) {
    selectorX = 750
    selectorY = 307
  }
  if (key === "d" && selectorX == 269) {
    selectorX += 80
  } else if (key === "d" && selectorX == 541 && selectorY == 509) {
    selectorX = 125
  }
  if (key === "a" && selectorX < 600) {
    selectorX -= 48
  } else if (key === "a" && selectorX == 125 && selectorY > 447) {
    selectorX = 493
  } else if (key === "a" && selectorX == 750 && selectorY == 307) {
    selectorX = 620
    selectorY = 320
    key = ""
  }
  if (key === "a" && selectorX == 301) {
    selectorX = 221
  } else if (key === "a" && selectorX == 77 && selectorY < 385) {
    selectorX = 620
  } else if (key === "a" && selectorX == 77 && selectorY > 385) {
    selectorX = 493
  } else if (key === "a" && selectorX == 620 && selectorY != 319) {
    selectorX = 493
  }

  if (key === "s" && selectorX < 600) {
    selectorY += 64
  } else if (key === "s" && selectorX > 600 && selectorX < 700 && selectorY < 384) {
    selectorY += 64
  }
  if (key === "s" && selectorY == 572) {
    selectorY = 320
  } else if (key === "s" && selectorY == 576) {
    selectorY = 320
  }
  if (key === "s" && selectorY == 307) {
    selectorY = 423
    key = ""
  }
  if (key === "s" && selectorX == 750 && selectorY == 423) {
    selectorY = 510
  }

  if (key === "w" && selectorY > 383 && selectorX < 700) {
    selectorY -= 64
  } else if (key === "w" && selectorY == 320 && selectorX < 600) {
    selectorY = 512
  } else if (key === "w" && selectorY == 320 && selectorX > 600) {
    selectorY = 384
  }

  if (key === "w" && selectorX > 700 && selectorY == 423) {
    selectorY = 307
  } else if (key === "w" && selectorX > 700 && selectorY == 510) {
    selectorY = 423
  }

  if (key === "Enter" && selectorX == 125 && selectorY == 320 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[0].toUpperCase()
  } else if (key === "Enter" && selectorX == 173 && selectorY == 320 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[1].toUpperCase()
  } else if (key === "Enter" && selectorX == 221 && selectorY == 320 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[2].toUpperCase()
  } else if (key === "Enter" && selectorX == 349 && selectorY == 320 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[3].toUpperCase()
  } else if (key === "Enter" && selectorX == 397 && selectorY == 320 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[4].toUpperCase()
  } else if (key === "Enter" && selectorX == 445 && selectorY == 320 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[5].toUpperCase()
  } else if (key === "Enter" && selectorX == 493 && selectorY == 320 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[28].toUpperCase()
  } else if (key === "Enter" && selectorX == 620 && selectorY == 320 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[26].toUpperCase()
  }

  if (key === "Enter" && selectorX == 125 && selectorY == 384 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[6].toUpperCase()
  } else if (key === "Enter" && selectorX == 173 && selectorY == 384 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[7].toUpperCase()
  } else if (key === "Enter" && selectorX == 221 && selectorY == 384 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[8].toUpperCase()
  } else if (key === "Enter" && selectorX == 349 && selectorY == 384 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[9].toUpperCase()
  } else if (key === "Enter" && selectorX == 397 && selectorY == 384 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[10].toUpperCase()
  } else if (key === "Enter" && selectorX == 445 && selectorY == 384 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[11].toUpperCase()
  } else if (key === "Enter" && selectorX == 493 && selectorY == 384 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[28].toUpperCase()
  } else if (key === "Enter" && selectorX == 620 && selectorY == 384 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[27].toUpperCase()
  }

  if (key === "Enter" && selectorX == 125 && selectorY == 448 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[12].toUpperCase()
  } else if (key === "Enter" && selectorX == 173 && selectorY == 448 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[13].toUpperCase()
  } else if (key === "Enter" && selectorX == 221 && selectorY == 448 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[14].toUpperCase()
  } else if (key === "Enter" && selectorX == 349 && selectorY == 448 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[15].toUpperCase()
  } else if (key === "Enter" && selectorX == 397 && selectorY == 448 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[16].toUpperCase()
  } else if (key === "Enter" && selectorX == 445 && selectorY == 448 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[17].toUpperCase()
  } else if (key === "Enter" && selectorX == 493 && selectorY == 448 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[18].toUpperCase()
  }

  if (key === "Enter" && selectorX == 125 && selectorY == 512 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[19].toUpperCase()
  } else if (key === "Enter" && selectorX == 173 && selectorY == 512 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[20].toUpperCase()
  } else if (key === "Enter" && selectorX == 221 && selectorY == 512 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[21].toUpperCase()
  } else if (key === "Enter" && selectorX == 349 && selectorY == 512 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[22].toUpperCase()
  } else if (key === "Enter" && selectorX == 397 && selectorY == 512 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[23].toUpperCase()
  } else if (key === "Enter" && selectorX == 445 && selectorY == 512 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[24].toUpperCase()
  } else if (key === "Enter" && selectorX == 493 && selectorY == 512 && nameTextLength < 7) {
    playerNameSelection.textContent += letters[25].toUpperCase()
  }

  if (key === "Enter" && selectorX == 750 && selectorY == 510) {
    const nameGrabbed = document.getElementById("nameText").textContent
    playerInfo.playerName = nameGrabbed
    console.log(playerInfo)
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
//     console.log(video.currentTime)
//   }
// })