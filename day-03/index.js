/**
 * Each square on the grid is allocated in a spiral pattern starting at a location
 * marked 1 and then counting up while spiraling outward. For example,
 * the first few squares are allocated like this:
 * 17  16  15  14  13
 * 18   5   4   3  12
 * 19   6   1   2  11
 * 20   7   8   9  10
 * 21  22  23---> ...
 * While this is very space-efficient (no squares are skipped), requested data must be
 * carried back to square 1 (the location of the only access port for this memory system)
 * by programs that can only move up, down, left, or right. They always take the
 * shortest path: the Manhattan Distance between the location of the data and square 1.
 * 
 * @author Mitchell Stack <mitchellrstack@gmail.com> (https://github.com/mitchellrstack/)
 * @param  {Number} input A Number to get the steps from
 * @return {Number}       The number of steps it takes to get back to one 
 */
const partOne = input => {
  // To work with example tests and negatives
  if (input <= 1) {
    return 0
  }

  // Get root of the input
  const inputRoot = Math.ceil(Math.sqrt(input))

  // If it's odd, then make it even, easier to divide even numbers!
  const cornerSquare = inputRoot % 2 !== 0 ? inputRoot : inputRoot + 1

  // Divide the even number by 2
  const num = (cornerSquare - 1) / 2

  // Get the difference of the input number and the steps to the center square
  const cycle = input - Math.pow((cornerSquare - 2), 2)

  // Get how many steps from the input to the corner
  const innerOffset = cycle % (cornerSquare - 1)

  // Get the number of steps by adding steps calculated to corner and steps to center
  return num + Math.abs(innerOffset - num)
}

module.exports = partOne
