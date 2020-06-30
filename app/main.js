import Background from './Background.js'
import Foreground from './Foreground.js'
import Bird from './Bird.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const img = new Image()
img.src = './assets/img/textures.png'

const bg = new Background(img)
const fg = new Foreground(img)
const bird = new Bird(img)

const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    bg.draw(ctx)
    fg.draw(ctx)
    bird.draw(ctx)
    requestAnimationFrame(loop)
}

document.onclick = () => {
    bird.flap()
}

loop()
