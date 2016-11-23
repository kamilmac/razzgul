const { guitarToNote } = require('../utils.js')
const { BASE } = require('../constants.js') 

const play = (output, midi, duration) => {
    _midi = midi[0]
    if (_midi.pause) return false
    const key = _midi.key.toString().includes('_')
        ? guitarToNote(_midi.key)
        : _midi.key 
    output.sendMessage([
        144,
        key + BASE,
        127
    ])
    setTimeout(
        () => output.sendMessage([
            128,
            key + BASE, 
            64
        ]), duration
    )
}

module.exports = {
    play,
}
