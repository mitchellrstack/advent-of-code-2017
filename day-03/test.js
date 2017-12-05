const partOne = require('./index.js')

const tests = [{
  in: 1,
  ex: 0
}, {
  in: 12,
  ex: 3
}, {
  in: 23,
  ex: 2
}, {
  in: 1024,
  ex: 31
}]

const challengeInput = 289326

for (let i = 0; i < tests.length; i++) {
  console.log(`IN: ${tests[i].in}, OUT: ${partOne(tests[i].in)}, EX: ${tests[i].ex}`)
}

console.log(`Challenge Result: ${partOne(challengeInput)}`)
