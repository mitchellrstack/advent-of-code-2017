/**
 * Now, instead of considering the next digit, it wants you to consider the digit halfway
 * around the circular list. That is, if your list contains 10 items, only include a
 * digit in your sum if the digit 10/2 = 5 steps forward matches it. Fortunately, your
 * list has an even number of elements.
 * 
 * @author Mitchell Stack <mitchellrstack@gmail.com> (https://github.com/mitchellrstack/)
 * @param  {String} input A String of Numbers 
 * @return {Number}       The sum of matching numbers
 */
const partTwo = input => {
  // Store original string
  const string = input.toString()
  const length = string.length
  const step = length / 2
  
  // Adds first half of string to end for easier looping
  const str = string + string.substring(0, length / 2)
  let sum = 0

  for (let i = 0; i < length; i++) {
    if (str[i] === str[i + step]) {
      sum += parseFloat(str[i])
    }
  }

  return sum
}

module.exports = partTwo
