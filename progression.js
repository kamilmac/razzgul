const from = (...prog) => {
    newSeq = []
    prog.forEach(p => {
        let i = 0
        while (i++ < p.times) newSeq.push(p.flow)
    })
    return newSeq
}


module.exports = {
    from,
}
