import Pipe from './Pipe.js'

export default class PipeGenerator {
    constructor(img) {
        this._img = img

        this._pipes = []

        this._time = 0
    }

    update() {
        ++this._time
        if (this._time % 100 == 0) {
            this._time -= 100
            this.spawn()
        }
    }

    draw(ctx) {
        this.update()
        for (let pipe of this._pipes) {
            pipe.draw(ctx)
        }
    }

    spawn() {
        const pipe = new Pipe(this._img, 320, (Math.random() + 1) * (-150))
        this._pipes.push(pipe)
    }

    collide(other) {
        for (let pipe of this._pipes) {
            if (pipe.collide(other))
                return true
        }
        return false
    }
}