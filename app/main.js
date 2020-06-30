const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const img = new Image()
img.src = './assets/img/textures.png'

const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0)
    requestAnimationFrame(loop)
}

loop()