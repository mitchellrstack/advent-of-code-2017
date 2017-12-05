/**
 * The spreadsheet consists of rows of apparently-random numbers. To make sure the
 * recovery process is on the right track, they need you to calculate the spreadsheet's
 * checksum. For each row, determine the difference between the largest value and the
 * smallest value; the checksum is the sum of all of these differences.
 * @author Mitchell Stack <mitchellrstack@gmail.com> (https://github.com/mitchellrstack/)
 * @param  {String} input A String of rows of space seperated numbers
 * @return {Number}       The sum of the difference of the highs and lows of each row
 */
const partOne = input => {
  const rows = input.split('\r\n')

  let sum = 0

  for (let r = 0; r < rows.length; r++) {
    const strings = rows[r].split(' ')

    // Convert strings to numbers
    const numbers = strings.map(n => parseFloat(n))

    // Sorts each row in order
    const sorted = numbers.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)

    // Add the difference to the sum
    sum += sorted[sorted.length - 1] - sorted[0]
  }

  return sum
}

module.exports = partOne
