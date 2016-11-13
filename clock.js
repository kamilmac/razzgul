const start = ({ options, progression, seed, player }) => {
    const intervalHolder = setInterval(() => {
        const newSeed = seed.get()
        const currentFlow = progression[newSeed.index]
        currentFlow
            ? player(newSeed._pipe_(...currentFlow))
            : clearInterval(intervalHolder)
    }, 50)
}

module.exports = {
    start,
}