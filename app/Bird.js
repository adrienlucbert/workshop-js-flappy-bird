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
    }

    update() {
        // Update physics
        this._speed += this._gravity

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
        ctx.drawImage(this._img, frame.sx, frame.sy, this._sw, this._sh, this._x, this._y, this._w, this._h)
    }

    flap() {
        this._speed = -4.6
    }
}