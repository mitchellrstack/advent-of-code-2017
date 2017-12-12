const fs = require('fs')
const processInstructions = require('./index.js').processInstructions
const getLargestRegister = require('./index.js').getLargestRegister

const example = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`

const done = processInstructions(example)
console.log(done)

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    throw err
  }
  
  //const pr = processInstructions(data)
  //const lr = getLargestRegister(pr)
  //console.log(`Largest register: ${lr.name} -> ${lr.value}`)
})
