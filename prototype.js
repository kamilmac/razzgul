const extend = () => {
    Object.prototype._pipe_ = function(...funcs) {
        if (!funcs.length) return this
        const obj = funcs[0](this)
        if (funcs.length === 1) return obj
        return funcs.reduce((a, b) => b(obj))
    }
}

module.exports = {
    extend,
}