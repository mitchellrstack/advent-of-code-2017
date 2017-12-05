const partOne = require('./partOne.js')
const fs = require('fs')

const test = '5 1 9 5\r\n7 5 3\r\n2 4 6 8'

// Example test provided
console.log(partOne(test), 18)

// Check test on input file
fs.readFile('./input', 'utf8', (err, data) => {
  if (err) {
    throw err
  }

  const string = data.toString()
  console.log(partOne(string))
})
