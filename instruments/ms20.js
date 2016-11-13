let i = 0
const play = (output, midi, duration) => {
    _midi = midi[0]
    if (_midi.pause) return false
    output.sendMessage([
        144,
        _midi.key + 60,
        127
    ])
    setTimeout(
        () => output.sendMessage([
            128,
            _midi.key + 60, 
            64
        ]), duration
    )
}

module.exports = {
    play,
}
