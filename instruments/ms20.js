
const play  = (output, note, duration) => {
    output.sendMessage([
        144,
        note,
        127
    ])
    setTimeout(
        () => output.sendMessage([
            128,
            note, 
            64
        ]), duration
    )
}

module.exports = {
    play,
}
