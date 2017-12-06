const mazeExplorer = require('./index.js').mazeExplorer
const mazeExplorer2 = require('./index.js').mazeExplorer2
const fs = require('fs')

const tests1 = [{
  in: [0, 3, 0, 1, -3],
  ex: 5
}]

const tests2 = [{
  in: [0, 3, 0, 1, -3],
  ex: 10
}, {
  in: [1, 3, 4, 2, -2, -5, 0, -2],
  ex: '?'
}]

// Run example tests for part 1
console.log('\nPart 1: ----')
for (let i = 0; i < tests1.length; i++) {
  console.log(`IN: ${tests1[i].in}, OUT: ${mazeExplorer(tests1[i].in)}, EX: ${tests1[i].ex}`)
}

// Run example tests for part 1
console.log('\nPart 2: ----')
for (let i = 0; i < tests2.length; i++) {
  console.log(`IN: ${tests2[i].in}, OUT: ${mazeExplorer2(tests2[i].in)}, EX: ${tests2[i].ex}`)
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  const strings = data.toString().split('\n')

  const treasureMap = strings.map(s => filterFloat(s))

  console.log(`\nPart 1 Challenge Result: ${mazeExplorer(treasureMap)}`)
  console.log(`\nPart 2 Challenge Result: ${mazeExplorer2(treasureMap)} === 472 ?`)
})

var filterFloat = function(value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}