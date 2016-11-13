// **TODO:
// MAKE IT WORK,
// FIX PROGRESSION INDEXING,
// AUTO RECOGNIZE GUITAR 

const midi = require('midi')
const clock = require('./clock.js')
const seed = require('./seed.js')
const progression = require('./progression.js')
const prototype = require('./prototype.js')
const { playRandomNote, transpoze } = require('./manipulators.js')
const ms20 = require('./instruments/ms20.js')
const volca = require('./instruments/volca.js')

const BPM = 130
const SWING = 0.1

prototype.extend()

const o1 = new midi.output()
const o2 = new midi.output()
o1.openPort(0)
o2.openPort(1)


const ms20Pipe = midi => midi._pipe_(
    playRandomNote({
        notes: [10, -10 ,20, 21, 23],
        interval: 3,
        // ignore: midi.beat > 20,
        instr: ['ms20', 0],
    })
)

const volcaPipe = midi => midi._pipe_(
    transpoze({
        interval: 6,
        pitch: [0, 3, 6],
        instr: ['volca', 0],
    })
)

const play = midi => {
    ms20.play(o1, midi.ms20, 20)
    // volca.play(o2, midi.volca)
}

const seq = progression.from(
    {
        times: 8000,
        flow: [ ms20Pipe ],
    }
    // {
    //     times: 16,
    //     flow: [ ms20Pipe, volcaPipe ],
    // }
)

clock.start({
    options: {
        loop: 32,
        bpm: BPM,
        swing: SWING,
    },
    progression: seq,
    seed,
    player: play,
})