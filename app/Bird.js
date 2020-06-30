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
    }

    draw(ctx) {
        ++this._time
        if (this._time % 10 == 0) {
            this._time -= 10
            this._step = (this._step + 1 >= this._frames.length ? 0 : this._step + 1)
        }
        const frame = this._frames[this._step]
        ctx.drawImage(this._img, frame.sx, frame.sy, this._sw, this._sh, this._x, this._y, this._w, this._h)
    }
}