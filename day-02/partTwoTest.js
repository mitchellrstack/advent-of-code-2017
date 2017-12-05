const partTwo = require('./partTwo.js')
const fs = require('fs')

const test = '5 9 2 8\r\n9 4 7 3\r\n3 8 6 5'

// Example test provided
console.log(`IN: ${test}, OUT: ${partTwo(test)}, EX: 9`)

// Check test on input file
fs.readFile('./input', 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  const string = data.toString()
  console.log(`Challenge Result: ${partTwo(string)}`)
})
