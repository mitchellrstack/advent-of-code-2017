const day07 = require('./index.js')
const fs = require('fs')

const examples = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`

console.log(day07.partOne(examples))

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    throw err
  }
  
  console.log(day07.partOne(data))
})