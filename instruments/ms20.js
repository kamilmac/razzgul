const play = (output, midi, duration) => {
    if (midi.pause) return false
    output.sendMessage([
        144,
        midi.note,
        127
    ])
    setTimeout(
        () => output.sendMessage([
            128,
            midi.note, 
            64
        ]), duration
    )
}

module.exports = {
    play,
}
