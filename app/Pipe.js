import Collider from "./Collider.js";

export default class Pipe {
    constructor(img, x, y) {
        this._img = img

        this._top = {
            sx: 553,
            sy: 0,
            sw: 53,
            sh: 400,
            x: x,
            y: y,
            w: 53,
            h: 400
        }

        this._bottom = {
            ...this._top,
            sx: 502,
            sy: 0,
            y: y + this._top.h + 90
        }
    }

    update() {
        this._top.x -= 2
        this._bottom.x -= 2
    }

    draw(ctx) {
        this.update()
        ctx.drawImage(this._img, this._top.sx, this._top.sy, this._top.sw, this._top.sh,
            this._top.x, this._top.y, this._top.w, this._top.h)
        ctx.drawImage(this._img, this._bottom.sx, this._bottom.sy, this._bottom.sw, this._bottom.sh,
            this._bottom.x, this._bottom.y, this._bottom.w, this._bottom.h)
    }

    collide(other) {
        const topCollider = new Collider(this._top.x, this._top.y, this._top.w, this._top.h)
        const bottomCollider = new Collider(this._bottom.x, this._bottom.y, this._bottom.w, this._bottom.h)

        if (topCollider.collide(other) || bottomCollider.collide(other))
            return true
        return false
    }
}