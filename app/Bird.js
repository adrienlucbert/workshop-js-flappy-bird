import Collider from './Collider.js'

export default class Bird {
    constructor(img) {
        this._img = img

        this._frames = [
            { sx: 276, sy: 112 },
            { sx: 276, sy: 139 },
            { sx: 276, sy: 164 },
            { sx: 276, sy: 139 }
        ]
        this._step = 0

        this._sw = 34
        this._sh = 26
        this._x = 50
        this._y = 150
        this._w = this._sw
        this._h = this._sh

        this._time = 0

        this._gravity = 0.25
        this._speed = 0
        this._rotation = 0
    }

    update() {
        // Update physics
        this._speed += this._gravity

        if (this._speed >= 4.6) {
            this._rotation = 90 * Math.PI / 180
            this._step = 1
        } else {
            this._rotation = -25 * Math.PI / 180
        }

        this._y += this._speed

        // Update current frame
        ++this._time
        if (this._time % 10 == 0) {
            this._time -= 10
            this._step = (this._step + 1 >= this._frames.length ? 0 : this._step + 1)
        }
    }

    draw(ctx) {
        this.update()
        const frame = this._frames[this._step]
        ctx.save()
        ctx.translate(this._x, this._y)
        ctx.rotate(this._rotation)
        ctx.drawImage(this._img, frame.sx, frame.sy, this._sw, this._sh,
            -this._w / 2, -this._h / 2, this._w, this._h)
        ctx.restore()
    }

    flap() {
        this._speed = -4.6
    }

    getCollider() {
        return new Collider(this._x, this._y, this._w, this._h)
    }
}