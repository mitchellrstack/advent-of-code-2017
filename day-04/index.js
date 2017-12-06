/**
 * A new system policy has been put in place that requires all accounts to use a
 * passphrase instead of simply a password. A passphrase consists of a series of
 * words (lowercase letters) separated by spaces.
 *
 * To ensure security, a valid passphrase must contain no duplicate words.
 *
 * @author Mitchell Stack <mitchellrstack@gmail.com> (https://github.com/mitchellrstack/)
 * @param  {String}  input A phrase to test is valid
 * @return {Boolean}       Whether the passphrase is valid or not
 */
const partOne = phrase => {
  // Split words into array
  const words = phrase.split(' ')

  // Sort the ray to be in order
  const sorted = words.sort()

  // Check if there are any matches of same words
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return false
    }
  }

  // Return true if there are no matches
  return true
}

/**
 * !! WON'T WORK WITH ANSWER ON WEBSITE FOR SOME REASON, GAVE UP TRYING PART TWO !!
 * For added security, yet another system policy has been put in place. Now, a valid
 * passphrase must contain no two words that are anagrams of each other - that is, a
 * passphrase is invalid if any word's letters can be rearranged to form any other word
 * in the passphrase.
 *
 * @author Mitchell Stack <mitchellrstack@gmail.com> (https://github.com/mitchellrstack/)
 * @param  {String}  input A phrase to test is valid
 * @return {Boolean}       Whether the passphrase is valid or not
 */
const partTwo = phrase => {
  return (isValidDuplicates(phrase) && isValidAnagram(phrase))
}

const isValidDuplicates = phrases => {
  const words = phrases.split(' ')
  // Sets can only contain unique entries so quick way to remove anything not unique
  // I didn't know about Sets until this challenge!
  return words.length === new Set(words).size
}

const hasAnagram = phrase => {
  const words = phrase.split(' ')
  // Sets can only contain unique entries so quick way to remove anything not unique
  return words.length !== new Set(words.map(w => w.split('').sort().join(''))).size
}

const isValidAnagram = phrase => !hasAnagram(phrase)

module.exports = { partOne, partTwo }
