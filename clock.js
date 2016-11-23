const start = ({ options, progression, seed, player }) => {
    const intervalHolder = setInterval(() => {
        const newSeed = seed.get()
        const currentFlow = progression[newSeed.index]
        currentFlow
            ? player(newSeed._pipe_(...currentFlow))
            : clearInterval(intervalHolder)
    }, 60 * 1000 / options.bpm / 4)
}

module.exports = {
    start,
}
