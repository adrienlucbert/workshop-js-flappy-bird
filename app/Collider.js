export default class Collider {
    constructor(x, y, w, h) {
        this._x = x
        this._y = y
        this._w = w
        this._h = h
    }

    collide(other) {
        if (this._x < other._x + other._w && other._x < this._x + this._w &&
            this._y < other._y + other._h && other._y < this._y + this._h)
            return true
        return false
    }
}