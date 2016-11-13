const start = ({ options, progression, seed, player }) => {
    let index = 0
    const intervalHolder = setInterval(() => {
        const currentFlow = progression[index++]
        currentFlow
            ? player(seed.get()._pipe_(...currentFlow))
            : clearInterval(intervalHolder)
    }, 60 * 1000 / options.BPM / 8)
}

module.exports = {
    start,
}