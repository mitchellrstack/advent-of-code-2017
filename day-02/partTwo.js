/**
 * It sounds like the goal is to find the only two numbers in each row where one evenly
 * divides the other - that is, where the result of the division operation is a whole
 * number. They would like you to find those numbers on each line, divide them, and add
 * up each line's result.
 * @author Mitchell Stack <mitchellrstack@gmail.com> (https://github.com/mitchellrstack/)
 * @param  {String} input A String of rows of space seperated numbers
 * @return {Number}       The sum of the difference of the highs and lows of each row
 */
const partTwo = input => {
  const rows = input.split('\r\n')

  let sum = 0

  for (let r = 0; r < rows.length; r++) {
    const strings = rows[r].split(' ')

    // Convert strings to numbers
    const numbers = strings.map(n => parseFloat(n))

    // Sorts each row in order
    const sorted = numbers.sort((a, b) => a > b ? -1 : a < b ? 1 : 0)

    // Iterate over the sorted numbers, starting with largest
    for (let n = 0; n < sorted.length; n++) {
      // Since the list is sorted greatest to smallest, you don't have to check
      // every number, just ones after n
      for (let j = n + 1; j < sorted.length; j++) {
        if (sorted[n] % sorted[j] === 0) {
          sum += sorted[n] / sorted[j]
        }
      }
    }
  }

  return sum
}

module.exports = partTwo
