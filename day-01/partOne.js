/**
 * The captcha requires you to review a sequence of digits (your puzzle input)
 * and find the sum of all digits that match the next digit in the list. The
 * list is circular, so the digit after the last digit is the first digit in
 * the list.
 * @author Mitchell Stack <mitchellrstack@gmail.com> (https://github.com/mitchellrstack/)
 * @param  {String} input A String of Numbers 
 * @return {Number}       The sum of matching numbers
 */
const partOne = input => {
  // Adds first char to end for easier looping
  const str = input.toString() + input.toString()[0]
  let sum = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum += parseFloat(str[i])
    }
  }

  return sum
}

module.exports = partOne
