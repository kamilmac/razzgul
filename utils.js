const delimiter = '_'
const stringToKeys = {
    '1': 4,
    '2': 9,
    '3': 14,
    '4': 19,
    '5': 23,
    '6': 28,
}

const countNote         = (a, b) => stringToKeys[a] + parseInt(b)
const guitarToNote      = s => countNote(...s.split(delimiter))
const guitar            = (...notes) => notes.map(n => guitarToNote(n))

module.exports = {
    guitarToNote,
    guitar,
}
