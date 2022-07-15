function run() {
  document.body.innerHTML = '<video src="assets/gameintro.mp4" width="960" height="640" autoplay="auto" loop volume="0.1"></video>';
}


const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((a, el) => a + el * 20 / 100, 0)

console.log(total)