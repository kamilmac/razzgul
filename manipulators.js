const playRandomNote = options => m => {
    if (options.ignore) return m
    const play = m.index % options.interval === 0 ? true : false
    if (play) {
        const rNote = options.notes[Math.floor(Math.random() * options.notes.length)]
        const ref = m[options.instr[0]][options.instr[1]] 
        ref.key = rNote
        ref.pause = false
    }
    return m
}

const transpoze = options => m => {
    const index = Math.floor(m.index / options.interval) % options.pitch.length
    const ref = m[options.instr[0]][options.instr[1]]
    ref.key += options.pitch[index]
    return m
}


module.exports = {
    playRandomNote,
    transpoze,
}