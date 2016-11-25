// TODO:
// DOCUMENT MANIPULATORS
// ADD SWING

const midi = require('midi')
const { BPM, SWING } = require('./constants.js')
const clock = require('./clock.js')
const seed = require('./seed.js')
const progression = require('./progression.js')
const prototype = require('./prototype.js')
const { playRandomNote, transpoze, iterateNotes, getRandom } = require('./manipulators.js')
const ms20 = require('./instruments/ms20.js')
const volca = require('./instruments/volca.js')

prototype.extend()

const o1 = new midi.output()
o1.openPort(0)
const o2 = new midi.output()
o2.openPort(1)

const ms20Pipe = midi => midi._pipe_(
    playRandomNote({
        notes: iterateNotes({
            list: [
                ['1_0', '2_2',  '3_2', '4_1', '5_0', '6_0'],
                ['1_0', '2_0',  '3_2', '4_2', '5_1', '6_0'],
                ['1_3', '2_2',  '3_0', '4_0', '5_1', '6_0'],
                ['1_3', '2_3',  '3_5', '4_5', '5_4', '6_3'],                
                ['1_3', '2_5',  '3_5', '4_4', '5_3', '6_3'],
            ],
            interval: 32,
            index: midi.index,
        }),
        interval: getRandom(1,12,4,6,16,3,8),
        instr: ['ms20', 0],
    })
)

const volcaPipe = midi => midi._pipe_(
    playRandomNote({
        notes: iterateNotes({
            list: [
                [0],
                [-5],
            ],
            interval: 32,
            index: midi.index,
        }),
        interval: 1,
        instr: ['volca', 8],
    })
)

const play = midi => {
    ms20.play(o1, midi.ms20, 20)
    volca.play(o2, midi.volca)
}

const seq = progression.from(
    {
        times: 2000,
        flow: [ ms20Pipe, volcaPipe ],
    }
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
