import Collider from "./Collider.js"

export default class Foreground {
    constructor(img) {
        this._img = img

        this._sx = 276
        this._sy = 0
        this._sw = 224
        this._sh = 112
        this._x = 0
        this._y = 480 - this._sh
        this._w = this._sw
        this._h = this._sh
    }

    draw(ctx) {
        ctx.drawImage(this._img, this._sx, this._sy, this._sw, this._sh, this._x, this._y, this._w, this._h)
        ctx.drawImage(this._img, this._sx, this._sy, this._sw, this._sh, this._x + this._w, this._y, this._w, this._h)
    }

    getCollider() {
        return new Collider(this._x, this._y, this._w * 2, this._h)
    }
}