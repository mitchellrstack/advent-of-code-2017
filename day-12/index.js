/**
 * !! NOT FINISHED !!
 * Day 12: Digital Plumber
 */
const plumber = input => {
  const rows = input.split('\n')

  let pipes = {}

  for (let i = 0; i < rows.length; i++) {
    const points = rows[i].split(' <-> ')
    const startPoint = points[0]
    const endPoints = points[1].split(', ')

    pipes[startPoint] = endPoints

    console.log(pipes)
  }
}

// Converts an object with array endpoints like:
// { '0': ['1', '3'], '1': ['4', '2'] }
// Into:
// { '0': { '1': { '4': null, '2': null }, '3': null }}
// Makes any endpoint without more endpoints point to null
const pipe = pipes => {

}

const example = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`

const test = plumber(example)
