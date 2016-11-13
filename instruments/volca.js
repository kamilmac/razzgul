
const CONSTANTS        = require('../CONSTANTS.js')


const volcaProps = {
    level: 7,
    pan: 10,
    start: 40,
    length: 41,
    speed: 43,
    pitchInt: 44,
    pitchAttack: 45,
    pitchDecay: 46,
    ampAttack: 47,
    ampDecay: 48,
}

const parseSpeed = note => {
        const noteToSpeed = {
                '-12': -32,
                '-11': -30,
                '-10': -27,
                '-9': -24,
                '-8': -21,
                '-7': -19,
                '-6': -16,
                '-5': -13,
                '-4': -11,
                '-3': -8,
                '-2': -5,        
                '-1': -3,        
                '0': 0,
                '1': 3,
                '2': 5,
                '3': 8,
                '4': 11,
                '5': 13,
                '6': 16,
                '7': 19,
                '8': 21,
                '9': 24,
                '10': 27,
                '11': 30,
                '12': 32,
            }
        const shift = 64
        const speed = noteToSpeed[note] + shift
        if(!speed) return shift
        return speed
    }

const play  = (output, pad = 1, note = 0, ignoreKey = true) => {
    if (!ignoreKey) {
        output.sendMessage([
            176 + (pad - 1), 
            43,
            parseSpeed(note)
        ])
    }
    output.sendMessage([
        144 + (pad - 1),
        note + CONSTANTS.base,
        127
    ])
}

module.exports = {
    play,
}
