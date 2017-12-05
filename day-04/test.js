const partOne = require('./index.js').partOne
const partTwo = require('./index.js').partTwo
const fs = require('fs')

const tests1 = [{
  in: 'aa bb cc dd ee',
  ex: true
}, {
  in: 'aa bb cc dd aa',
  ex: false
}, {
  in: 'aa bb cc dd aaa',
  ex: true
}]

// Run example tests for part 1
console.log('\nPart 1: ----')
for (let i = 0; i < tests1.length; i++) {
  console.log(`IN: ${tests1[i].in}, OUT: ${partOne(tests1[i].in)}, EX: ${tests1[i].ex}`)
}

// Check part 1 test on input file
fs.readFile('./input', 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  const strings = data.toString().split('\r\n')

  let validPhrases = 0
  for (let i = 0; i < strings.length; i++) {
    if (partOne(strings[i])) {
      validPhrases++
    }
  }
  console.log(`\nPart 1 Challenge Result: ${validPhrases}`)
})

// Example tests for part two
const tests2 = [{
  in: 'abcde fghij',
  ex: true
}, {
  in: 'abcde xyz ecdab',
  ex: false
}, {
  in: 'a ab abc abd abf abj',
  ex: true
}, {
  in: 'iiii oiii ooii oooi oooo',
  ex: true
}, {
  in: 'oiii ioii iioi iiio',
  ex: false
}]

// Run example tests for part 2
console.log('\nPart 2: ----')
for (let i = 0; i < tests2.length; i++) {
  console.log(`IN: ${tests2[i].in}, OUT: ${partTwo(tests2[i].in)}, EX: ${tests2[i].ex}`)
}

// Check part 2 test on input file
fs.readFile('./input', 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  const strings = data.toString().split('\r\n')

  let validPhrases = 0
  for (let i = 0; i < strings.length; i++) {
    if (partTwo(strings[i])) {
      validPhrases++
    }
  }
  console.log(`\nPart 2 Challenge Result: ${validPhrases}`)
})
