const playRandomNote = ({ ignore, interval, notes, instr }) => m => {
    if (ignore) return m
    const play = m.index % interval === 0 ? true : false
    if (play) {
        const rNote = notes[Math.floor(Math.random() * notes.length)]
        const ref = m[instr[0]][instr[1]] 
        ref.key = rNote
        ref.ignoreKey = false
        ref.pause = false
    }
    console.log("m", m);
    return m
}

const transpoze = ({ interval, pitch, instr }) => m => {
    const index = Math.floor(m.index / interval) % pitch.length
    const ref = m[instr[0]][instr[1]]
    ref.key += pitch[index]
    ref.ignoreKey = false
    return m
}

const iterateNotes = ({ list, interval, index }) => {
    const i = Math.floor(index / interval) % list.length
    return list[i]
}


module.exports = {
    playRandomNote,
    transpoze,
    iterateNotes,
}